<template>
  <div
    :class="carouselClasses">
    <!-- Carousel -->
    <div
      class="el-carousel-container"
      :style="{height: height}"
      >
      <slot></slot>
    </div>
    <!-- 第一个小目标 indicator -->
    <ul 
      :class="indicatorsClasses">
      <!-- 有多少个carousel-item 就输出多少个indicator? -->
      <li 
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'el-carousel__indicator',
          'el-carousel__indicator--' + direction,
        ]">
        <button class="el-carousel__button">
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
// 设计小目标 目标驱动学习
export default {
  // 严格下不可或缺
  name: 'Carousel',
  data() {
    return {
      items: [] //空 何来？
    }
  },
  props: {
    height: String,
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    // 根据方向计算
    carouselClasses() {
      // vue :class 
      const classes = ['el-carousel', 'el-carousel--' + this.direction];
      // 小目标， 最核心的功能摸清楚
      // vue :class 支持
      // 小细节等下搞 
      // if (this.type === 'card') {  
      //   classes.push('el-carousel--card');
      // }
      return classes;
    },
    indicatorsClasses() {
      const classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];
      return classes;
    }
  },
  methods: {
    updateItems() {
      // console.log('-------')
      // console.log(this.$children);// 子组件
      // nb
      this.items = this.$children.filter(child => child.$options.name === 'CarouselItem')
    }
  }
}
</script>