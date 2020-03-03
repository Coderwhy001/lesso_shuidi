import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //如果你在一定的时间登陆过 ， 就去首页
  // 如果你在任何页面没有权限， 后台， 一定会送你去登录页
  {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
