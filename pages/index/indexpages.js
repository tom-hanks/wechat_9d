// pages/index/indexpages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'Hello,Wrold',
    idNumer:1,
    condition:true,
    nav1:[
      { name: '热门',
        id:0
      },
      { name: '股市', 
        id:1
      },
      {
        name: '期货',
        id: 2
      },
      {
        name: '黄金',
        id: 5
      },
      {
        name: '外汇',
        id: 7
      },
      ],
    arr1: [],
    dictid:1,
    p:1,
    classifyid:0,
    classifyname:'',
    alocation:2,
    pagenum:10,
    cate:'lol',
    clickid:0  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onajx();
  },
  shopPost: function (event) {
    var postId = event.currentTarget.dataset.shopid;
    // console.log('点击的id', event.currentTarget.id)
    this.setData({
      arr1:[],
      classifyid: event.currentTarget.id
    });
    this.data.p=1;
    this.data.cate = postId;
    this.onajx();
    },
  onajx:function(){
    let that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://api.9dcj.com/Api/TAdvert/gethomeAdvert', //仅为示例，并非真实的接口地址
      data: {
        // dictid:2,
        p: that.data.p,
        classifyid: that.data.classifyid,
        // alocation:1
      },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res)
         that.setData({
           arr1: [...that.data.arr1, ...res.data.result.zhibo]
         });
        //  console.log(that.data.arr1)
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
    this.setData({
      arr1: []
    })
    this.data.p = 1;
    this.onajx();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.p += 1;
    this.onajx();
    // this.periphery();
    console.log(this.data.p)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})