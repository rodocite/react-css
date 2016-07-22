const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/entry.js'),
  output: path.resolve(__dirname, 'dist/bundle.js'),
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
          test: /\.css$/,
          loaders: [
              'style?sourceMap',
              // Change this to change the BEM class name on output
              'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          ]
      }
    ],
  },
  devServer: {
    contentBase: './dist',
    publicPath: 'http://localhost:3000/',
  }
};
