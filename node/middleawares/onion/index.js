const koa = require('koa');
const app = new koa();

const one = async (ctx, next) => {
  console.log('>> 1');
   next();
  console.log('<< 2')
}
const two = async (ctx, next) => {
  console.log('>> 3');
  ctx.body = 'hello, two'
   next();
  console.log('<< 4')
}
const three = async (ctx, next) => {
  console.log('>> 5');
   next();
  console.log('<< 6')
}
app.use(one)
app.use(two)
app.use(three)
app.listen(3000)