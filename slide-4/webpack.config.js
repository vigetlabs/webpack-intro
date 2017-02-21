/************************************************\
 *           INTRO TO WEBPACK: SLIDE 4          *
\************************************************/

const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HTMLPlugin()
  ],

  // Module rules tell Webpack how it should process files
  module: {
    rules: [{
      test: /.css$/,
      loaders: [ 'style-loader', 'css-loader' ]
    }]
  },

  devServer: {
    contentBase: './dist'
  }
}
