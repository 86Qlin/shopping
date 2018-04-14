<template>
  <div>
    <x-header slot="header" ><span>{{title}}</span>
    </x-header>
    <router-view></router-view>
    <tabbar @on-index-change="indexChange">
      <tabbar-item   :selected="$route.path.indexOf('homeIndex') !== -1? true : false" link="homeIndex">
        <i slot="icon" class="iconfont icon-home"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path.indexOf('goodsType') !== -1? true : false" link="goodsType">
        <i slot="icon" class="iconfont icon-fenlei"></i>
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path.indexOf('cartIndex') !== -1? true : false" link="cartIndex">
        <i slot="icon" class="iconfont icon-gouwuche"></i>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path.indexOf('center') !== -1? true : false" link="center">
        <i slot="icon" class="iconfont icon-gerenzhongxin"></i>
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
    <!-- 置顶 -->
    <Stick></Stick>
  </div>
</template>
<script>
import {XHeader, Tabbar, TabbarItem} from 'vux'
export default {
  data () {
    return {
      title: '微商城',
      menus: {
        menu2: '分享到朋友圈'
      },
      showMenus: false,
      index: 0
    }
  },
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  },
  methods: {
    indexChange(index) {
      switch (true) {
        case index == 0:
          this.title = '首页'
          break
        case index == 1:
          this.title = '分类'
          break
        case index == 2:
          this.title = '购物车'
          break
        case index == 3:
          this.title = '个人中心'
          break
        default:
          break
      }
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
  
</style>

