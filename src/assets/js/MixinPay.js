/*
* @Name: pay支付程序
* @Author: leeson
* @Date:   2017-09-21 23:15:20
* @Last Modified by:   leeson
* @Last Modified time: 2017-09-22 14:48:49
*/

const MixinPay = {
  methods: {
    /**
     * @method:ajax请求数据方法
    */
    postData() {
      let params = {
        amount: 0.1,
        open_id: 'oX7ELuJy4Anl_B1O0mqegISXWKNg'
      }
      this.$PAY(params).then(res => {
        if (res.data && res.data.success) {
          let result = JSON.parse(res.data.successtext)
          let data = JSON.parse(result.payinfo)
          console.log('payInfo', data)
          this.weixinPay(data)
        }
      })
    },
    /**
     * @method :微信支付方法
     * @param data
    */
    weixinPay(data) {
      if (typeof WeixinJSBridge == 'undefined') { // 微信浏览器内置对象。参考微信官方文档
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(data), false)
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady(data))
          document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady(data))
        }
      } else {
        this.onBridgeReady(data)
      }
    },
    /**
     * @method 支付费用方法
     * @param data:后台返回的支付对象,(详情微信公众号支付API中H5提交支付)
    */
    onBridgeReady(data) {
      WeixinJSBridge.invoke('getBrandWCPayRequest', {
        appId: data.appId,           // 公众号名称，由商户传入
        timeStamp: data.timeStamp,   // 时间戳，自1970年以来的秒数
        nonceStr: data.nonceStr,     // 随机串
        package: data.package,
        signType: data.signType,     // 微信签名方式：
        paySign: data.paySign        // 微信签名
      }, (res) => {
        // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        if (res.err_msg == 'get_brand_wcpay_request：ok') {
          // this.$router.push('/reservedBerth')
          _C.toastMsg('success', '支付成功')
        } else {
          alert('支付失败' + res.err_msg)
        }
      })
    }
  }
}
export default MixinPay
