/************************************************\
 *           INTRO TO WEBPACK: SLIDE 6          *
\************************************************/

const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  // Entry points can be an array
  entry: [
    // Bundle the client for webpack-dev-server // and connect to the
    // provided endpoint
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HTMLPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  module: {
    rules: [
      {
        test: /.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      },
      // Loaders work together, building a dependency graph
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
