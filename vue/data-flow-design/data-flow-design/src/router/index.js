import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Goods = Vue.extend({
  template: `
  <div>
      <h2>我是标题</h2>
      <p>我是内容</p>
  </div>`
})
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: 'home',
        components: {
          goods: Goods
        }
      },
      {
        path: 'goods',
        components: Goods
      },
      {
        path: 'goodsDetails',
        name: 'goodsDetails',
        component: GoodsDetails
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
