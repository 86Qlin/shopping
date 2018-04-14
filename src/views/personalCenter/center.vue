<template>
  <div>
    <div class="detail-content"></div>
    <group>
      <cell title="我的订单" value="查看全部" is-link></cell>
    </group>
    <div class="card-demo-flex card-demo-content01">
      <div>
        <i class="iconfont icon-qian"></i>
        <div>待付款</div>
      </div>
      <div>
        <i class="iconfont icon-daifahuo"></i>
        <div>待发货</div>
      </div>
      <div>
        <i class="iconfont icon-ziyuan"></i>
        <div>待收货</div>
      </div>
      <div>
        <i class="iconfont icon-yiwancheng"></i>
        <div>已完成</div>
      </div>
      <div>
        <i class="iconfont icon-yiquxiao"></i>
        <div>已取消</div>
      </div>
    </div>
    <group>
      <cell title="收货地址" is-link>
        <i slot="icon" class="iconfont icon-dizhi"></i>
      </cell>
    </group>
  </div>
</template>

<script>
import {Group, Cell} from 'vux'
export default {
  mounted() {
  },
  data () {
    return {
    }
  },
  components: {
    Group,
    Cell
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
  .detail-content{
    width: 100%;
    height: 100px;
    margin-top: 46px;
    margin-bottom: -20px;
    background: #C12928;
  }
  .card-demo-flex {
    display: flex;
    background: #fff
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    line-height: 26px;
    font-size: 13px;
  }
  .card-demo-flex div > i{
    font-size: 26px
  }
  .card-demo-flex span {
    color: #f74c31;
  }
  .icon-dizhi{
    font-size: 20px
  }
</style>