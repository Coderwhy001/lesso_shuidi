const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    promotion: './src/promotion/index.js',
    pay: './src/pay/index.js'
  },  // 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    // new 一次
    // index.html
    new HtmlWebpackPlugin({
      template: './src/pay/index.html',
      filename: 'pay.html',
      chunks: ['pay']  // 当前 html 引入的 js 文件 有哪些
    }),
    new HtmlWebpackPlugin({
      filename: 'promotion.html',
      template: './src/promotion/index.html',
      chunks: ['promotion']
    })
  ]
}