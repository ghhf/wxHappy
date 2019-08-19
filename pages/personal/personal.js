// pages/personal/personal.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avator: '',
    name:'',

    orderStatus: [{
      icon: '../../images/personal/group.png',
      name: '待成团'
    }, {
      icon: '../../images/personal/payment.png',
      name: '待付款'
    }, {
      icon: '../../images/personal/send.png',
      name: '待发货'
    }, {
      icon: '../../images/personal/delivery.png',
      name: '待收货'
    }, {
      icon: '../../images/personal/comment.png',
      name: '待评价'
    }],

    personalList: [{
      name: '个人信息',
      rightIcon: '../../images/common/right_arrow.png'
    }, {
      name: '地址管理',
      rightIcon: '../../images/common/right_arrow.png'
    }, {
      name: '我的红包',
      rightIcon: '../../images/common/right_arrow.png'
    }, {
      name: '联系客服',
      rightIcon: '../../images/common/right_arrow.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("personal>>>>>>", app.globalData.userInfo)
    var that = this;
    if (app.globalData.userInfo == null) {
      //请求获取用户信息
      wx.navigateTo({
        url: '../../pages/index/index'
      })
    } else {
      that.setData({
        avator: app.globalData.userInfo.avatarUrl,
        name: app.globalData.userInfo.nickName
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 点击 查看我的订单
   */
  seeMyOrder: function() {
    wx.navigateTo({
      url: '../../pages/personalSub/allOrder/allOrder',
    })
  },
  /**
   * 点击订单状态
   */
  tapOrderItem: function(e) {
    console.log(e)
    let idx = e.currentTarget.dataset.id;
    switch(idx){
      case 0: //待成团
      break
      case 1: //待付款
      break
      case 2: //待发货
      break
      case 3: //待收货
      break
      case 4: //待评价
      break
    }
    
  },
  /**
   * 点击个人中心列表
   */
  tapListItem:function(e){
    let idx = e.currentTarget.dataset.id;
    switch (idx) {
      case 0: //个人信息
        break
      case 1: //地址管理
        break
      case 2: //我的红包
        break
      case 3: //联系客服
        break
    }
  }
})