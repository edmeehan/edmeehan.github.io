module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./_javascript/main.js",
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
      path: '/Users/emeehan/Sites/Personal/edmeehan.github/js/',
      filename: "main.js"
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
  }
};