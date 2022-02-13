const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let mode = process.env.NODE_ENV;

if(process.env.NODE_ENV !== 'production'){
  mode = 'development';
}
module.exports = {
  mode: mode,
  plugins: [ new MiniCssExtractPlugin()],
  module: {
    rules: [
      // style rules
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env', 
                  {
                    //option
                  }
                ]
              ]
            }
          }
          }, 
          'sass-loader'
        ]
      },
      // js rules
      {
        test: /\.js$/i,
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
    static: './dist',
    hot: true
  }
}