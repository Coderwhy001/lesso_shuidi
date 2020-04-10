// 函数
module.exports = (config, resolve) => {
  // console.log('在这里做基本配置吧')
  return () => {
    config 
    .entry('app')
      .add(resolve('src/main.js'))// 项目的根目录
      .end()
    .set('mode', process.env.NODE_ENV)
    .output
      .path(resolve('dist'))
      .filename('[name].bundle.js')
  }
}