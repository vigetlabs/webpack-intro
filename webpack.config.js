const Webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const url = require('url')

module.exports = function (env) {
  env = env || 'production'

  let isProduction = env !== 'development'

  return {
    // Inline source-maps are faster, but penalize the build. In production,
    // use a regular source map to keep bundle size down
    devtool: isProduction ? 'source-map' : 'cheap-module-inline-source-map',

    entry: [
      './src/polyfills.js',
      './src/main.js'
    ],

    output: {
      path: path.resolve('build'),
      pathinfo: !isProduction,
      filename: isProduction ? 'static/js/[name].[chunkhash:8].js' : 'static/js/[name].js',
      publicPath: publicPath
    },

    plugins: [
      new HTMLPlugin({
        inject: true,
        template: 'public/index.html'
      }),
      // React contains many developer-friendly warnings. We want to
      // disable that in production
      new Webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
        }
      }),
      // Extract CSS modules out of the main JavaScript payload. The
      // disabled option sets this to only run in production. Keeping
      // styles within the main payload during development allows the
      // live reloading of styles.
      new ExtractTextPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        allChunks: true,
        disable: !isProduction,
        publicPath: publicPath
      })
    ],

    resolve: {
      extensions: [ '.js', '.jsx', '.json', '.less', '.css' ]
    },

    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          include: /src/
        },
        {
          test: [/\.jsx?$/],
          exclude: /node_modules\/(?!icontact)/,
          loader: 'babel-loader',
          options: {
            // Incrementally compile JS in development
            cacheDirectory: isProduction ? null : '.babel-cache'
          }
        },
        {
          test: /\.less$/,
          exclude: /node_modules\/(?!icontact)/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 2,
                  localIdentName: '[folder]__[local]___[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
              },
              {
                loader: 'less-loader'
              }
            ]
          })
        },
        {
          test: /icons\/.+\.svg$/,
          loader: 'raw-loader'
        },
        {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
          exclude: /icons\/.+\.svg$/,
          loader: 'file-loader',
          options: {
            name: 'static/images/[name].[hash:8].[ext]'
          }
        }
      ]
    },

    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      process: false,
      Buffer: false
    },

    // These options configure the webpack dev server
    devServer: {
      contentBase: 'public',
      publicPath: publicPath,
      hot: true,
      quiet: false,
      historyApiFallback: true,
      port: process.env.PORT || 3000
    }
  }

  // In development, apply some additional behavior to improve developer
  // experience:
  if (isProduction === false) {
    // Add hot module replacement for live reloading and better
    // error reporting
    config.entry.unshift(
      'react-hot-loader/patch',
      'react-dev-utils/webpackHotDevClient'
    )

    config.plugins.push(
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NamedModulesPlugin()
    )
  }
}
