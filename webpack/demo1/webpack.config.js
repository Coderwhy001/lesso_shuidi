const path  = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist')
const Config = require('webpack-chain');  //写webpack配置的新方案
const config = new Config();  //实例化
const resolve = (src) => {
  return path.join(process.cwd(), src)
}
config
  .entry('src/main')
    .add(resolve('src/main.js'))    //返回文件的真正路径
    .end()
  .set('mode', process.env.NODE_ENV)
  .output
    .path(resolve('dist'))
    .filename('[name].bundle.js')   //entry main.js -> mian.js 之前试什么名字就是什么名字

config.module
  .rule('css')
  .test(/\.css$/)
  .use('css')
  .loader('css-loader')

module.exports = config.toConfig();