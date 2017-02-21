/************************************************\
 *           INTRO TO WEBPACK: SLIDE 7          *
\************************************************/

const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = function (env) {
  env = env || 'production'

  let isProduction = env != 'development'

  let config = {
    devtool: 'source-map',

    // This is new: entries can be an object, where the keys are the
    // name of the bundle
    entry: {
      application: [
        './src/index.js'
      ]
    },

    output: {
      // Each webpack module gets a unique revision hash
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist')
    },

    plugins: [
      new HTMLPlugin()
    ],

    module: {
      rules: [
        {
          test: /.css$/,
          loaders: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.(jpg|jpeg|png|svg)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]'
          }
        }
      ]
    },

    devServer: {
      hot: true,
      contentBase: './dist',
      publicPath: '/'
    }
  }

  // Add developer conviniences in non-production mode
  if (isProduction != true) {
    config.entry.dev = [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    )
  }

  return config
}
