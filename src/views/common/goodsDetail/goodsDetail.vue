<template>
  <div>
    <x-header :left-options="{backText: ''}">商品详情</x-header>
  </div>
</template>

<script>
import {Swiper, SwiperItem, XHeader, Tab, TabItem, Tabbar, TabbarItem, Grid, GridItem, XImg} from 'vux'
export default {
  mounted() {
    this.fetchData(this.$route.params.id)
  },
  data() {
    return {
      goodsImages: [],
      goodsData: []
    }
  },
  components: {
    XHeader,
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    XImg
  },
  watch: {
    $route(to) {
      var reg = /detail\/\d+/
      if (reg.test(to.path)) {
        var categotyId = this.$route.params.id || 0
        this.fetchData(categotyId)
      }
    }
  },
  methods: {
    fetchData(id) {
      console.log(id)
      /*var _this=this;
      _this.$http.get('/detail',{
          params: {
              mId: id
          }
      }).then((res)=>{
          _this.goodsImages = res.data[0];
          _this.goodsData = res.data[1];
      },(err)=>{
          console.log(err);
      })*/
    }
  }
}
</script>

<style lang="css" scoped>
</style>