const PageData = {
  data () {
    return {
      showLoading: false,  // 是否显示加载
      onFetching: false,   // 是否正在请求
      currentPage: 1,      // 当前页数
      limit: 10,           // 每次请求返回数量限制
      data: [],            // 数据(删除)
      isCache: false,      // 是否为缓存
      allLoaded: false,    // 是否全部已加载
      pulldownConfig: {    // 下拉配置
        content: '刷新',
        pullDownHeight: 60,
        height: 60,
        autoRefresh: false,
        downContent: '下拉刷新',
        upContent: '释放后刷新',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pulldown-'
      },
      pullupConfig: {      // 上拉配置
        content: '',
        pullUpHeight: 60,
        height: 60,
        autoRefresh: false,
        downContent: '',
        upContent: '',
        loadingContent: '',
        clsPrefix: 'xs-plugin-pullup-'
      }
    }
  },
  methods: {
    // 上拉
    onPullupLoading() {
      console.log('Sb小秦')
      this.$nextTick(() => {
        this.$refs.scroller.donePullup()
        this.$refs.scroller.reset()
      })
      if (this.isCache) {
        return              // 缓存数据禁止加载
      }
      if (this.allLoaded) {
        return              // 全部加载完成
      }
      this.currentPage++
      this.showLoading = true
      this.onFetching = true
      this.loadmore().then(() => {
        this.onFetching = false
        this.showLoading = false
      }).catch(() => {
        this.onFetching = false
      })
    },
    // 下拉
    onPulldownLoading() {
      this.$nextTick(() => {
        this.$refs.scroller.donePulldown()
      })
      this.onFetching = true
      this.refresh().then(() => {
        this.isCache = false
        this.onFetching = false
      }).catch(() => {
        this.onFetching = false
      })
    },
    judgeLoaded(datas) {
      if (this.data.length === datas.total || !datas.total) {
        this.allLoaded = true
      } else {
        this.allLoaded = false
      }
    }
  },
  watch: {
    onFetching: function(val, old) {
      if (val) {
        this.$vux.loading.show({
          text: '加载中...'
        })
      } else {
        this.$vux.loading.hide()
      }
    }
  }
}
export default PageData
