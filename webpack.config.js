const path = require('path');

let mode = process.env.NODE_ENV;

if(process.env.NODE_ENV !== 'production'){
  mode = 'development';
}
module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        },
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    static: './dist'
  }
}