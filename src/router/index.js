import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const home = resolve => require(['../views/home.vue'], resolve)
/* 首页 */
const homeIndex = resolve => require(['../views/homePage/homeIndex.vue'], resolve)
/* 分类 */
const goodsType = resolve => require(['../views/goodsType/goodsType.vue'], resolve)
/* 购物车 */
const cartIndex = resolve => require(['../views/shoppingCart/cartIndex.vue'], resolve)
/* 搜索 */
const search = resolve => require(['../views/searchPage/search.vue'], resolve)
/* 个人中心 */
const center = resolve => require(['../views/personalCenter/center.vue'], resolve)
/* 商品详情 */
const goodDetail = resolve => require(['../views/common/goodsDetail/goodsDetail.vue'], resolve)
const routes = [
  {
    path: '/',
    component: home,
    redirect: '/home/homeIndex',
    children: [
      {
        path: '/home/homeIndex',
        component: homeIndex
      },
      {
        path: '/home/goodsType',
        component: goodsType
      },
      {
        path: '/home/cartIndex',
        component: cartIndex
      },
      {
        path: '/home/center',
        component: center
      }]
  },
  {
    path: '/detail/:id',
    component: goodDetail
  }]
export default new Router({
  routes
})
