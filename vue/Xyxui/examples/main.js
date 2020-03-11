// examples/main.js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import yixuanui from '../packages'
// 注册组件库
Vue.use(yixuanui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
