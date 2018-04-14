/* global $toastMsg $lockr $store
* @Name:
* @Author: leeson
* @Date:   2017-09-23 12:04:22
* @Last Modified by:   leeson
* @Last Modified time: 2017-09-27 22:02:15
*/
import axios from 'axios'
// 权限验证
export function _fetch(options) {
  if (options.url.indexOf('@') !== -1) {
    options.url = options.url.substring(1)
    axios.defaults.baseURL = '/api/'
  } else {
    axios.defaults.baseURL = '/api/weixin/'
  }
  return new Promise((resolve, reject) => {
    const instance = axios.create()
    instance.defaults.timeout = 1000 * 10
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + $lockr.get('authKey')
    instance(options).then(res => {
      // 请求错误全局输出错误信息
      if (res.status !== 200) {
        $toastMsg(res.status, 'warn')
      }
      // 授权过期或为获取授权的处理
      if (res.data.status === 401) {
        $toastMsg('正在获取授权……', 'text')
        $store.dispatch('login', {direct: true})
      }
      resolve(res)
    }).catch(() => {
      $toastMsg('网络不给力哦', 'warn')
      // reject(error)
    })
  })
}
// 不需要权限验证
export function fetch(options) {
  if (options.url.indexOf('@') !== -1) {
    options.url = options.url.substring(1)
    axios.defaults.baseURL = '/auth/'
  } else {
    axios.defaults.baseURL = '/auth/weixin/'
  }
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      timeout: 1000 * 10 // 超时
    })
    instance(options).then(response => {
      const res = response
      resolve(res)
    })
    .catch(() => {
      $toastMsg('网络不给力哦', 'warn')
    })
  })
}