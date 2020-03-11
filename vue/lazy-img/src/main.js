import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  error: require('./assets/loading.svg'),
  loading: require('./assets/loading.svg'),
  attempt: 1 // viewport
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
