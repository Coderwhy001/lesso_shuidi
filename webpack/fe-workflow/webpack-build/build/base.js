const { findSync } = require('../lib')
const Config = require('webpack-chain')
const config = new Config()
const path = require('path')
const resolve = src => {
  return path.join(process.cwd(), src) // cwd是指当前命令行所在的文件夹 __dirname是指当前js文件所在文件夹
}
const files = findSync('config')
// console.log(files, '---')
module.exports = () => {
  // console.log('在这里做基本配置吧')
  const map = new Map();
  files.map(file => {
    const name = file.split('/').pop().replace('.js', '')
    // console.log(name, '---')
    return map.set(name, require(file)(config, resolve));
  })
  // console.log(map, 'map---')
  map.forEach(v => v())
  return config
}