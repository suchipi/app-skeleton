/* eslint-disable no-var */
var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  entry: [
    'babel-polyfill',
    'core-js/stage/4',
    path.resolve('./src/index.js'),
  ],
  resolve: {
    root: [
      path.resolve('./src'),
    ],
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
};
