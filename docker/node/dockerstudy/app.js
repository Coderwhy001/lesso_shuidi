const Koa = require('koa');
const app = new Koa();
const view = require('koa-views');
const logger = require('koa-logger');
const onerror = require('koa-onerror');
// 中间件式
const index = require('./routes/index');
const fs = require('fs');

onerror(app);
app.use(ctx =>{
    ctx.body = fs.createReadStream('dffaf');
});
app.use(view(__dirname + '/views',{
    extension: 'pug'
}));
app.use(logger());
app.use(index.routes(),index.allowedMethods())
// 模块化 COMMONJS
module.exports = app;