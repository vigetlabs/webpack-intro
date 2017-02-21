/************************************************\
 *           INTRO TO WEBPACK: SLIDE 2          *
\************************************************/

const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  // Webpack is pluggable. Here, we tell it to generate an HTML
  // file that includes our entry points using the HTMLPlugin
  plugins: [
    new HTMLPlugin()
  ]
}
