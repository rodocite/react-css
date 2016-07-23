const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'bundle.js': './app/react/entry.js',
    'index.js': './app/just-css/index.js'
  },
  output: {
    path: './dist',
    filename: '[name]'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.css$/,
      //   loaders: [
      //       'style?sourceMap',
      //       // Change this to change the BEM class name on output
      //       'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
      //   ]
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]')
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('html-styles.css', {
      allChunks: true
    })
  ],
  devServer: {
    contentBase: './dist',
    publicPath: 'http://localhost:3000/',
  }
};
