<template>
  <div>
    <scroller lock-x scrollbar-y style="background:#eee;width:80px;position: fixed;top:90px" ref="scroller">
      <div class="box1">
        <div :class="['box1-item',index == selectItem ? 'activeClass' : '']" v-for="(item, index) in menuType" @click="selectItem = index"><span>{{item}}</span>
        </div>
      </div>
    </scroller>
    <router-view style="padding-left: 80px"></router-view>
  </div>
</template>

<script>
import { Scroller } from 'vux'
export default {
  name: 'searchMain',
  data () {
    return {
      selectItem: 0,
      menuType: ['男装', '电器', '手机', '服饰', '美食', '家居', '母婴', '家纺', '运动', '水果', '美妆', '电器', '手机', '服饰', '美食', '家居', '母婴', '家纺', '运动', '水果', '美妆']
    }
  },
  components: {
    Scroller
  },
  mounted() {
    this.$router.push('/search/searchMain/menDress')
  }
}
</script>

<style lang="css" scoped>
  .box1 {
  padding-bottom: 140px
  }
  .box1-item {
    width: 80px;
    height: 50px;
    background-color: #eee;
    margin-bottom: 5px;
    text-align: center;
    line-height: 50px;
  }
  .activeClass {
    background-color: #fff !important;
    color: #db2726;
  }
</style>