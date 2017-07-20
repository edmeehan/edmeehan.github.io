let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let path = require('path');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: {
    main : path.resolve(__dirname, '_javascript/main.js'),
    welcome : path.resolve(__dirname, '_javascript/welcome.js'),
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  // plugins: [
  //   new UglifyJSPlugin({
  //     sourceMap : true
  //   })
  // ]
};