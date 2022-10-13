const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolvePath = (_path) => path.resolve(__dirname, _path);
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css单独文件
const baseConfig = {
  mode: "development",
  entry: resolvePath("../src/index.jsx"),
  output: {
    path: resolvePath("../dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.js|.jsx$/,
        use: "babel-loader",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("../public/index.html"),
      filename: "index.html",
      title: "react app",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
module.exports = {
  baseConfig,
  resolvePath,
};
