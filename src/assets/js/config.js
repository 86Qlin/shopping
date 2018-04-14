/*
* @Name: 全局配置文件
* @Author: leeson
* @Date:   2017-09-22 21:48:57
* @Last Modified by:   leeson
* @Last Modified time: 2017-09-28 10:19:35
*/

import store from 'store'
let conf = {
  appName: '泉盈一卡通',
  baseURI: 'http://' + window.location.host, //根域名
  serverTEL: '0531-81260888',
  authURI: 'http://wx.lianying.me/auth/scope', // 微信授权地址
  imgURI: 'http://img.lianying.me',  // 图片服务器根地址
  background: '#FBF9FE'
}

export default conf