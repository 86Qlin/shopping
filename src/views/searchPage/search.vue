<template>
  <div>
    <search placeholder="寻找宝贝" style="position: fixed;top:46px" position="fixed">
      <a href="javascript:" slot='right' class="search-button">搜索</a>
    </search>
    <router-view style="padding-top: 90px;"></router-view>
  </div>
</template>

<script>
import {Search} from 'vux'
export default {
  data () {
    return {
    }
  },
  components: {
    Search
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
  .search-button{
    margin-left: 10px;
    line-height: 28px;
    color: rgb(252, 55, 140);
    white-space: nowrap;
    font-family: "Microsoft YaHei"
  }
</style>