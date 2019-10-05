const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      // 'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
      Test: path.resolve(__dirname, '_javascript')
    }
  },
  entry: {
    main: path.resolve(__dirname, '_javascript/main.js'),
    contact_form: path.resolve(__dirname, '_javascript/contact_form.js'),
    page_index: path.resolve(__dirname, '_javascript/page_index.js'),
    live_chat: path.resolve(__dirname, '_javascript/live_chat.js')
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js',
    // sourceMapFilename: 'bundle.map'
  },
  optimization: {
    runtimeChunk: {
      name: 'commons'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // test: /\.jsx?$/,
        // exclude: /(node_modules)/,
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env']
        //   }
        // }
      }
    ]
  }
};
