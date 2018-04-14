<template>
  <div>
    <scroller lock-x scrollbar-y style="background:#eee;width:80px;position: fixed;top: 46px;z-index:2" ref="scroller" @on-scroll="onScroll">
      <div class="box1">
        <div :class="['box1-item',index == selectItem ? 'activeClass' : '']" v-for="(item, index) in menuType" @click="selectItem = index"><span>{{item}}</span>
        </div>
      </div>
    </scroller>
    <scroller lock-x scrollbar-y style="background:#eee;position: fixed;top: 46px; width:100%;padding-left: 80px;box-sizing: border-box"ref="scroller" @on-scroll="onScroll">
      <div class="box2">
        <div class="box2-item" v-for="i in 10">男装
          <span style="float: right">查看更多></span>
          <div style="width:100%;height:100px"></div>
        </div>

      </div>
    </scroller>
  </div>
</template>

<script>
import {Scroller} from 'vux'
export default {
  data () {
    return {
      selectItem: 0,
      menuType: ['男装', '电器', '手机', '服饰', '美食', '家居', '母婴', '家纺', '运动', '水果', '美妆', '电器', '手机', '服饰', '美食', '家居', '母婴', '家纺', '运动', '水果', '美妆']
    }
  },
  components: {
    Scroller,
    leftTop: 100
  },
  methods: {
    onScroll (pos) {
      if (pos.top >= 100) {
        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: this.leftTop
          })
        })
      }
      console.log(pos.top, pos.left)
    }
  }

}
</script>

<style lang="css" scoped>
  .box1, .box2{
  padding-bottom: 100px;
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