const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    './app/assets/stylesheets/delete-me.js': './frontend/haml/style-manifest.js'
  },
  output: {
    path: './',
    filename: '[name]'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('./app/assets/stylesheets/webpack-styles.css')
  ]
}
