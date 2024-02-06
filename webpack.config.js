const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
    historyApiFallback: true,
    open: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ico)\?inline$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCSSExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

}

// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// module.exports = {
//   target: 'web',
//   devtool: 'inline-source-map',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: path.resolve(__dirname, '/dist'),
//     open: true,
//     compress: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader, 'css-loader',
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: './src/index.html',
//       filename: './index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//   ],
// };



