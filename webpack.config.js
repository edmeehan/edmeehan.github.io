let path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, '_javascript/main.js'),
    contact_form : path.resolve(__dirname, '_javascript/contact_form.js'),
    page_index : path.resolve(__dirname, '_javascript/page_index.js')
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: "[name].js",
    //sourceMapFilename: 'bundle.map'
  },
  module: {
    rules: [{
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