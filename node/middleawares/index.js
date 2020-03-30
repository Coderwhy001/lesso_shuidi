const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser') // 中间件服务 函数
// const sayHelloCN = async (ctx) => {
//   ctx.body = '你好世界'
// }
// const sayHello = async (ctx) => {
//   ctx.body = 'hello, world'
// }
// app.use(sayHello)
// app.use(sayHelloCN) // 启用一个中间件服务
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next()
}
app.use(logger)
app.use(bodyParser())
app.use(async (ctx) => {
  ctx.body = ctx.request.body 
})
app.listen(3000);
