<template>
  <div id="app">
    <carousel >
        <carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{item}}</h3>
        </carousel-item>
    </carousel>
    <!-- <el-alert
    title="成功提示的文案"
    type="error"
    >
    </el-alert> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import ElAlert from './components/ElAlert.vue'

export default {
  name: 'App',
  components: {
    // ElAlert
    // 'carousel': Carousel
  }
}
</script>

<style>

</style>