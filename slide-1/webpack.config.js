/************************************************\
 *           INTRO TO WEBPACK: SLIDE 1          *
\************************************************/

const path = require('path')

// Webpack is a tool for bundling JavaScript projects. It centers
// around a configuration file.
module.exports = {
  // Entry tells Webpack where it should start scanning for
  // dependencies.
  entry: './src/index.js',

  // Output tells Webpack where build artifacts should be
  // written. These values can include bindings to build information,
  // like the name of the entry point:
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }

}
