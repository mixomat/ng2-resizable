var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sourcePath = __dirname;

module.exports = {
  // misc configuration
  devtool: 'source-map',
  debug: true,

  context: sourcePath,
  entry: ['reflect-metadata', './app.ts'],

  output: {
    path: sourcePath,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.scss']
  },

  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts', exclude: [/node_modules/]},
      {test: /\.scss$/, loader: 'style!css!sass'}
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    })
  ],

  // our webpack dev server config
  devServer: {
    colors: true,
    historyApiFallback: true,
    contentBase: sourcePath
  }

};
