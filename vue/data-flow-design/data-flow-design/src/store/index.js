import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutation from './mutation'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    userInfo: null,
    products: {},
    cartList: [],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
