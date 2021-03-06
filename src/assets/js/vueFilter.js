/*
* @Name:
* @Author: leeson
* @Date:   2017-09-22 21:48:57
* @Last Modified by:   leeson
* @Last Modified time: 2017-09-23 14:45:05
*/

import Vue from 'vue'
import accounting from 'accounting'

/**
  * 格式化数字相当于vue1.0时的currency过滤器
  * @param value 传进来的数字
  * @param symbol 货币称号，默认为人民币
  * @param dat 保留的小数点位数，默认为2位
  * @param return
*/

Vue.filter('currency', function (value, symbol = '¥', dat = 2) {
  return accounting.formatMoney(value, symbol, dat)
})