const {merge} = require('webpack-merge')
const { baseConfig, resolvePath } = require("./webpack.base.config") ;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(baseConfig,{
    mode:'production',
    devtool:'inline-source-map',
    optimization: {
        minimizer: [
          // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
          // `...`,
          new CssMinimizerPlugin(),
        ],
      },
})
