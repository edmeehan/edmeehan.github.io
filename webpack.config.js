let path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, '_javascript/main.js'),
    // welcome : path.resolve(__dirname, '_javascript/welcome.js'),
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: "[name].js",
    //sourceMapFilename: 'bundle.map'
  },
  module: {
    rules: [{
      //test: /\.m?js$/,
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};