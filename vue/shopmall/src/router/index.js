import Vue from 'vue'
import Router from 'vue-router'
// 首页 直接载入
import HelloWorld from '@/components/HelloWorld'
// 95% 不登录 没必要在页面/ 加载s 延迟加载， 渐进式的，
// 相对路径， vue 架构， src/ 层级有点深， 
// router components/common views
// webpack alias 快速链接 快
const Login = () => import('@/components/Login')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodsList',
      name: 'GoodsList',
      component: () => import('../components/GoodsList.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue')
    },
  ]
})
