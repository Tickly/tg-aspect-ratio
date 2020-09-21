<template>
  <div>
    <p>通过给组件的父元素设置一个宽度，即可控制组件的大小，比如你想要一个100px * 100px的元素，那么就给组件的父元素宽度设为100px即可。</p>
    <p>
      <button @click="set(1,1)">1:1</button>
      <button @click="set(2,1)">2:1</button>
      <button @click="set(4,3)">4:3</button>
      <input rows="5" v-model="text" />
      <span>{{size}}</span>
    </p>
    <div class="w-100">
      <tg-aspect-ratio ref="ar" :w="w" :h="h">{{text}}</tg-aspect-ratio>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      w: 1,
      h: 1,
      text: 'Hello World',
      size: {
        width: 0,
        height: 0,
      }
    }
  },
  watch: {
    w () { this.getSize() },
    h () { this.getSize() },
  },
  mounted () {
    this.getSize()
  },
  methods: {
    set (w, h) {
      this.w = w
      this.h = h
    },
    getSize () {
      this.$nextTick(function () {
        let el = this.$refs.ar.$el

        this.size = {
          width: el.offsetWidth,
          height: el.offsetHeight,
        }
      })
    }
  }
}
</script>
<style>
.w-100 {
  width: 100px;
}

.tg-aspect-ratio {
  color: white;
  background-color: black;
}
</style>