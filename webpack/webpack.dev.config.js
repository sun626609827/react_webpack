const { merge } = require("webpack-merge");
const { baseConfig, resolvePath } = require("./webpack.base.config") ;
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host:'127.0.0.1',
    port: 3333,
    historyApiFallback: true,
    hot:true,
    open:true,
  },
});
