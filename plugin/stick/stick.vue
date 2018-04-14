<template>
  <div>
    <div :class="['stick-content', divShow ? 'top-show' : '']" @click="toTop">
      <i class="iconfont icon-zhiding1" style="font-size:34px;"></i>
    </div>
  </div>
</template>

<script>
export default {

  name: 'stick',

  data () {
    return {
      divShow: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 300) {
        this.divShow = true
      } else {
        this.divShow = false
      }
    },
    toTop() {
      document.documentElement.scrollTop = 0
      window.pageYOffset = 0
      document.body.scrollTop = 0
    }
  }
}
</script>

<style lang="css" scoped>
  .stick-content {
    position: fixed;
    bottom: 60px;
    right: 16px;
    color: #EE8476;
    display: none;
    opacity: 0.8;
  }
  .top-show{
    display: block;
  }
</style>