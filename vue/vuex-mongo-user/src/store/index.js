import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index.js'
Vue.use(Vuex)
// 单一状态树
export default new Vuex.Store({
  state: {
    users: [
      // {
      //     "address": {
      //       "city": "Los Angeles",
      //       "state": 'california',
      //       "poncode": "123"
      //     },
      //     "tags": [
      //       "music",
      //       "blogs",
      //       "cricket"
      //     ],
      //     "name": "Tom Benzamin"
      //   },
      //   {
      //     "address": {
      //       "city": "抚州",
      //       "state": '江西',
      //       "poncode": "33100"
      //     },
      //     "tags": [
      //       "coding",
      //       "blogs"
      //     ],
      //     "name": "肖仡轩"
      //   },
      //   {
      //     "address": {
      //       "city": "九江",
      //       "state": '江西',
      //       "poncode": "33100"
      //     },
      //     "tags": [
      //       "coding",
      //       "blogs"
      //     ],
      //     "name": "刘子民"
      //   },
      //   {
      //     "address": {
      //       "city": "赣州",
      //       "state": '江西',
      //       "poncode": "33100"
      //     },
      //     "tags": [
      //       "coding",
      //       "games"
      //     ],
      //     "name": "衷从海"
      //   }
    ]
  },
  mutations: {
    setUsers(state, payload) { // 写操作 唯一地方
      state.users = payload
    }
  },
  actions: { // 写入状态的第一步
    fetchUser(context) {
      api
      .fetchUser((users) => {
        console.log(users);
        // 写入state，严格一些 写一个条子 流程来
        context.commit('setUsers', users)
      })
    },
  },
  getters: {  // state computed 函数
    getUsers(state) {
      return state.users.map(user => {
        user.id = user.address.poncode 
        return user
      })
    }
  },
  modules: {
  }
})
