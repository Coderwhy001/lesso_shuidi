<template>
  <div id="app">
    <!-- <div v-for="(user, index) in $store.state.users" :key="index">
      {{user.name}}
    </div> -->
    <div v-for="(user, index) in getUsers" :key="index">
      {{user.id}} {{user.name}}
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'App',
  data () {
    return {
      // 组件 做不了主， 数据驱动页面
      // vuex 两部分 ui 用户界面工程师 地方 数据流管理 vuex 中央
      users: [
        // {
        //   "address": {
        //     "city": "Los Angeles",
        //     "state": 'california',
        //     "poncode": "123"
        //   },
        //   "tags": [
        //     "music",
        //     "blogs",
        //     "cricket"
        //   ],
        //   "name": "Tom Benzamin"
        // },
        // {
        //   "address": {
        //     "city": "抚州",
        //     "state": '江西',
        //     "poncode": "33100"
        //   },
        //   "tags": [
        //     "coding",
        //     "blogs"
        //   ],
        //   "name": "肖仡轩"
        // },
        // {
        //   "address": {
        //     "city": "九江",
        //     "state": '江西',
        //     "poncode": "33100"
        //   },
        //   "tags": [
        //     "coding",
        //     "blogs"
        //   ],
        //   "name": "刘子民"
        // },
        // {
        //   "address": {
        //     "city": "赣州",
        //     "state": '江西',
        //     "poncode": "33100"
        //   },
        //   "tags": [
        //     "coding",
        //     "games"
        //   ],
        //   "name": "衷从海"
        // }
      ]
    }
  },
  components: {
    // HelloWorld
  },
  // 中央数据的到来
  computed: {
    ...mapGetters(['getUsers'])
  },
  mounted () {// 使用生命周期取数据
    // 派发动作
    this.fetchUser()
    // this.$store.dispatch('fetchUser')
  },
  methods:{
    ...mapActions(['fetchUser'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
