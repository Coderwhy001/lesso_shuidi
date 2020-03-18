import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 为空 未登录 
    userInfo: {
      uid: 10001,
      username: '腾哥'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart, 
    products

  }
})
