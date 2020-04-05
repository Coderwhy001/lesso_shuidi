import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
Vue.use(VueRouter)


const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')// 懒加载

const routes = [
  {
    path: '/',
    redirect: 'home'// 重定向
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router