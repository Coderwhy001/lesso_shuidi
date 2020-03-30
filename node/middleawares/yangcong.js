const koa = require('koa');
const app = new koa();

const one = async (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one')
}
const two = async (ctx, next) => {
  console.log('>> two');
  ctx.body = 'hello, two'
  next();
  console.log('<< two')
}
const three = async (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three')
}
app.use(one)
app.use(two)
app.use(three)
app.listen(3000)