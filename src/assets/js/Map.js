const mapData = {
  data () {
    return {
      isOk: false,       // 是否初始化完成
      map: {},           // 地图对象
      currentPoint: {},  // 当前位置点
      targetPoint: {},   // 目标位置点
      popupVisible: false, // 控制搜索结果
      btnVisible: true,   // 导航面板
      address: ''        // 百度定位的地点
    }
  },
  methods: {
    // 创建地址解析器实例
    createTargetAddress() {
      var map = new BMap.Map('map')
      this.map = map
      var myGeo = new BMap.Geocoder()
      var _this = this
      myGeo.getPoint(this.address, function(point) {
        if (point) {
          point = new BMap.Point(point.lng, point.lat)
          _this.targetPoint = point
          map.centerAndZoom(point, 16)
          map.addControl(new BMap.NavigationControl())
          map.addControl(new BMap.ScaleControl())
          map.addControl(new BMap.OverviewMapControl())
          map.addControl(new BMap.MapTypeControl())
          map.addOverlay(new BMap.Marker(point))
        } else {
          alert('您选择地址没有解析到结果!')
        }
      }, '山东省')
    },
    //  定位当前位置
    getCurrentAddress() {
      var _this = this
      var geolocation = new BMap.Geolocation()
      var map = this.map
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point)
          map.addOverlay(mk)
          console.log('您的位置：' + r.point.lng + ',' + r.point.lat)
          _this.currentPoint = r.point
          _this.isOk = true
        } else {
          alert('failed' + this.getStatus())
        }
      },
        {
          enableHighAccuracy: true
        })
    },
    // 公车方式
    byBus() {
      this.popupVisible = true
      this.btnVisible = false
      var map = this.map
      var _this = this
      var transit = new BMap.TransitRoute(map,
        {
          renderOptions: {
            map: map,
            panel: 'result'
          }
        })
      transit.search(_this.currentPoint, _this.targetPoint)
    },
    // 自驾车
    byCar() {
      this.popupVisible = true
      this.btnVisible = false
      var _this = this
      var driving = new BMap.DrivingRoute(_this.map,
        {
          renderOptions: {
            map: _this.map,
            panel: 'result',
            autoViewport: true
          }
        })
      driving.search(_this.currentPoint, _this.targetPoint)
    },
    // 步行
    onFoot() {
      this.popupVisible = true
      this.btnVisible = false
      var _this = this
      var walking = new BMap.WalkingRoute(_this.map,
        {
          renderOptions: {
            map: _this.map,
            panel: 'result',
            autoViewport: true
          }
        })
      walking.search(_this.currentPoint, _this.targetPoint)
    }
  },
  computed: {
    distance: function() {
      return BMapLib.GeoUtils.getDistance(this.currentPoint, this.targetPoint)
    }
  }
}
export default mapData
