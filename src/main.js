// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { AlertPlugin, LoadingPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
/*自定义插件*/
import stick from '../plugin/stick'
Vue.use(stick)
require('./assets/css/common.css')
require('./assets/css/global.css')
require('./assets/icon/iconfont.css')
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
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
