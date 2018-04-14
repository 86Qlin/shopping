/* global CONF
* @Name:
* @Author: leeson
* @Date:   2017-09-22 21:48:57
* @Last Modified by:   leeson
* @Last Modified time: 2017-09-28 10:10:52
*/

require('assets/css/common.css')
require('assets/css/global.css')
require('assets/icon/iconfont.css')
import lockr from 'lockr'
let openid = lockr.get('openid')

// 开发调试开始 ****开发环境打开下面两行即可在非微信浏览器环境调试
// openid = 'oX7ELuJy4Anl_B1O0mqegISXWKNg5'
// lockr.set('openid', openid)
// 开发调试结束
import conf from './config'   // 全局配置
window.CONF = Vue.prototype.$CONF = conf // 全局配置

if (!openid || !openid.length) {
  location.replace(CONF.authURI)
}
//注册时，vux必须放在 import Vue from 'vue'; 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了
import { AlertPlugin, LoadingPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
import Vue from 'vue'
import common from 'assets/js/common'
//------ 全局注册 VUX UI 注册 -------
Vue.use(AlertPlugin)    // Alert
Vue.use(LoadingPlugin)  // Loading
Vue.use(ToastPlugin)    // Toast
Vue.use(ConfirmPlugin)  // Confirm

// 非组件调用 toastMsg
window.$toastMsg = (msg, type) => {
  if (!type) {
    Vue.$vux.toast.show(msg)
  } else {
    switch (type) {
      case 'text':
        Vue.$vux.toast.text(msg)
        break
      case 'warn':
        Vue.$vux.toast.show({
          type: 'warn',
          text: msg
        })
        break
      default:
        Vue.$vux.toast.show(msg)
    }
  }
}

// 非组件调用 confirm
window.$confirm = (obj) => {
  Vue.$vux.confirm.show({
    title: !obj.title ? '' : obj.title,
    content: !obj.content ? '' : obj.content,
    onCancel: (obj.onCancel && typeof (obj.onCancel) == 'function') ? obj.onCancel : null,
    onConfirm: (obj.onConfirm && typeof (obj.onConfirm) == 'function') ? obj.onConfirm : null
  })
}

//--- VUX UI 注册 END --
import httpd from './Request' // http配置
// import M from './common'   // 公共函数

window.$lockr = lockr
window._POST = Vue.prototype.$_POST = httpd._apiPost // 需要验证权限的请求
window.POST = Vue.prototype.POST = httpd.apiPost     // 不需验证权限的请求
window._PUT = Vue.prototype.$_PUT = httpd._apiPut    // 修改内容调用
window._C = Vue.prototype.$_C = common
import vueFilter from './vueFilter'

//解决click点击300毫秒延时问题
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 全局组件绑卡提示
// import BindCard from 'components/common/bindcard'
// Vue.use(BindCard)
