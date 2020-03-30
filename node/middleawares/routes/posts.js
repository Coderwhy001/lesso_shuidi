const Router = require('koa-router')
const router = new Router({
  prefix: '/posts'
});
const auth = require('../middlewares/auth.js')

router.get('/', async(ctx) => {
  ctx.body = '文章列表'
})
router.post('/', auth, async(ctx) => {
  // ctx.redirect('/login')
  ctx.body = '保存成功'
})
module.exports = router