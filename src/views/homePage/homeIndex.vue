<template>
  <div>
    <search placeholder="寻找宝贝" style="position: fixed;top:46px;z-index: 10000;" position="fixed">
      <a href="javascript:" slot='right' class="search-button">搜索</a>
    </search>
    <swiper auto style="height:140px;margin-top: 90px">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo1" :key="index" style="height:140px">
        <img :src="item">
      </swiper-item>
    </swiper>
    <grid :cols="5">
      <grid-item v-for="(item, index) in demo2" :key="index">
        <img slot="icon" :src="item">
        <span class="grid-center">限时秒杀</span>
      </grid-item>
    </grid>
    <div v-for="(item, index) in demo3" class="good-info" >
      <router-link  class="not_eng_link" :to="'/detail/'+item.product_id">
        <span style="font-size:20px;">Loading</span>
        <x-img :src="item.src" class="ximg-demo" @on-success="success" @on-error="error" error-class="ximg-error" :offset="200" container="#vux_view_box_body">
        </x-img>
        <p style="text-align: left;color:#444">2015冬装淑女衣坊女装韩版蘑菇街韩范羊绒尼子大衣中长款毛呢外套</p>
        <p class="not_eng_text">
          <i style="text-decoration: none; font-style: normal">¥</i>
          <span class="more_info_price_txt">388</span>
          <span style="font-size: 12px; color: #ccc">已售100件</span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import {Search, Swiper, SwiperItem, Grid, GridItem, XImg} from 'vux'
const imgList = [
  '../../../../static/img/swiper_1.jpg',
  '../../../../static/img/swiper_2.jpg',
  '../../../../static/img/swiper_3.jpg'
]
const imgList1 = [{
  'src': 'https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg',
  'product_id': 1
}, {
  src: 'https://img.alicdn.com/bao/uploaded/i2/TB1IBrkKpXXXXb.aXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
  'product_id': 2
}, {
  src: 'https://img.alicdn.com/bao/uploaded/i1/TB1hOzLKpXXXXcdXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
  'product_id': 3
}, {
  src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1ilzdHFXXXXcqXVXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg',
  'product_id': 4
}, {
  src: 'https://img.alicdn.com/bao/uploaded/i2/TB1ZOsFKpXXXXaZaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
  'product_id': 5
}, {
  src: 'https://img.alicdn.com/bao/uploaded/i3/TB1uC5hLpXXXXaGXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
  'product_id': 6
}]
const imgList2 = [
  '../../../../static/img/kind_icon_1.png',
  '../../../../static/img/kind_icon_2.png',
  '../../../../static/img/kind_icon_3.png',
  '../../../../static/img/kind_icon_4.png',
  '../../../../static/img/kind_icon_1.png',
  '../../../../static/img/kind_icon_2.png',
  '../../../../static/img/kind_icon_3.png',
  '../../../../static/img/kind_icon_4.png',
  '../../../../static/img/kind_icon_1.png',
  '../../../../static/img/kind_icon_2.png'
]
export default {
  name: 'homePage',
  data () {
    return {
      navList: ['首页', '男装', '电器', '手机', '服饰', '美食', '家居', '母婴', '家纺', '运动', '水果', '美妆'],
      index: 0,
      navSelect: '首页',
      demo1: imgList,
      demo2: imgList2,
      demo3: imgList1
    }
  },
  components: {
    Search,
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    XImg
  },
  methods: {
    success (src, ele) {
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    },
    onSwiperItemIndexChange (index) {
      console.log('on item click:', index)
    }
  }
}
</script>

<style lang="css" scoped>
  .swiper-demo-img img{
    width: 100%
  }
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
    font-size: 12px;
    line-height: 22px
  }
  .good-info{
    background-color:#D9D9D9; 
    text-align:center; 
    height: 200px;
    margin-bottom: 90px
  }
  .good-info p{
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    padding:5px 10px;
  }
  .good-info img{
    vertical-align: bottom;
  }
  .not_eng_text {
    text-align: left;
    width: 80px;
    color: #F11938;
    font-weight: 800;
    font-family: "\5FAE\8F6F\96C5\9ED1";
    font-size: 16px;
  }
  .more_info_price_txt{
    line-height: 30px
  }
  .search-button{
    margin-left: 10px;
    line-height: 28px;
    color: rgb(252, 55, 140);
    white-space: nowrap;
    font-family: "Microsoft YaHei"
  }
</style>