// pages/index/live_room/live_room.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    live_rtmp: '',
    full_img:false//控制退出全屏按钮的显示隐藏
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onReady:function(res) {
   
  },
  statechange(e) {
    // console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  bindPlay() {
    this.ctx.play({
      success: res => {
        console.log('play success')
      },
      fail: res => {
        console.log('play fail')
      }
    })
  },
  bindPause() {
    this.ctx.pause({
      success: res => {
        console.log('pause success')
      },
      fail: res => {
        console.log('pause fail')
      }
    })
  },
  bindStop() {
    this.ctx.stop({
      success: res => {
        console.log('stop success')
      },
      fail: res => {
        console.log('stop fail')
      }
    })
  },
  bindResume() {
    this.ctx.resume({
      success: res => {
        console.log('resume success')
      },
      fail: res => {
        console.log('resume fail')
      }
    })
  },
  bindMute() {
    this.ctx.mute({
      success: res => {
        console.log('mute success')
      },
      fail: res => {
        console.log('mute fail')
      }
    })
  },
  // 打开全屏
  bindquan(){
    this.ctx.requestFullScreen({
      direction:90,
      success: res => {
        this.setData({
          full_img:true
        })
        console.log('requestFullScreen success')
      },
      fail: res => {
        console.log('requestFullScreen fail')
      }
    })
  },
   // 退出全屏
  bindtuiquan(){
    this.ctx.exitFullScreen({
      success: res => {
        this.setData({
          full_img: false
        })
        console.log('exitFullScreen success')
      },
      fail: res => {
        console.log('exitFullScreen fail')
      }
    })
  },
  onPlay: function (ret) {
    if (ret.detail.code == 2004) {
      console.log('视频播放开始', ret);
    }
  },
  statechange(e) {
    // console.log('live-player code--:', e)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  onLoad: function (options) {
    console.log('sss', options.roomid);//房间秘钥
    this.ctx = wx.createLivePlayerContext('player')
    console.log('dsadsadsa', this.ctx)
    this.onajx(options.roomid);
  },
  clickMe() {
    console.log('kkk')
  },
  onajx: function (a) {
    let that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://apipush.9dcj.com', //仅为示例，并非真实的接口地址
      data: {
        url_roomid: a
      },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        that.setData({
          live_rtmp: res.data.result.rtmp
        })
        console.log(res.data.result.rtmp)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})
