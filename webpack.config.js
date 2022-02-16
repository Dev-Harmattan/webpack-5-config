const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");



let mode = process.env.NODE_ENV;

if(process.env.NODE_ENV !== 'production'){
  mode = 'development';
}
module.exports = {
  mode: mode,
  plugins: [ new CleanWebpackPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: './src/index.html'
  })],

  // create image output file for the bull
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'image/[hash][ext][query]'
  },
  module: {
    rules: [
      //images rule
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // style rule
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
        test: /\.js$|jsx/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', ['@babel/preset-react', {runtime: 'automatic'}]]
        },
      }
    ]
  },
   
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true
  }
}