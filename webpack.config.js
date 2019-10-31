const path = require('path');

module.exports = {
  entry: './jscript.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};