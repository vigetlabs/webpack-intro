/************************************************\
 *           INTRO TO WEBPACK: SLIDE 3          *
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

  // Dev server configuration options can be passed into
  // the configuration
  devServer: {
    contentBase: './dist'
  }
}
