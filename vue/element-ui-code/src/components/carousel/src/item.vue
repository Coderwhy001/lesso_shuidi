<template>
  <div>
    <!-- CarouselItem -->
    <slot />
  </div>
</template>
<script>
export default {
  // 严格下不可或缺
  name: 'CarouselItem',
  // 尽快的 实例化的，mounted 挂载到页面 
  created() {
    // console.log(this.$parent)
    // if (this.$parent) {

    // }
    //emit
    // 
    this.$parent && this.$parent.updateItems()
  }
}
</script>