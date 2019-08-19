// pages/home/home.js 
// 主页
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentItemId: 2,
    indicatorDots: false, //显示面板指示点
    autoplay: true, //自动切换
    interval: 3000, //自动切换时间间隔
    duration: 2000, //滑动动画时长
    imgUrls: [
      "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
      "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
      "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
    ],

    tabs: [
      [{
        icon: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
        name: '精选1'
      }, {
        icon: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
        name: '精选2'
      }, {
        icon: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
        name: '精选3'
      }, {
        icon: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
        name: '精选4'
      }],
      [{
        icon: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '测试1'
      }, {
          icon: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '测试2'
      }, {
          icon: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '测试3'
      }, {
          icon: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '测试4'
      }]
    ],

    lists: [{
      img: '../../images/temp/slider.jpg',
      title: '标题咯',
      desc: '这是简介啊'
    }, {
      img: '../../images/temp/slider.jpg',
      title: '标题咯标题咯标题咯标题咯标题咯标题咯标题咯',
      desc: '这是简介啊这是简介啊这是简介啊这是简介啊这是简介啊这是简介啊这是简介啊这是简介啊'
    }, {
      img: '../../images/temp/slider.jpg',
      title: '标题',
      desc: '这是简介啊'
    }, {
      img: '../../images/temp/slider.jpg',
      title: '标题咯标题咯标题咯标题咯标题咯标题咯',
      desc: '这是简介啊'
    }, {
      img: '../../images/temp/slider.jpg',
      title: '标题咯标题咯标题咯',
      desc: '这是简介啊'
    }, {
      img: '../../images/temp/slider.jpg',
      title: '标题咯',
      desc: '这是简介啊'
    }, {
      img: '../../images/temp/slider.jpg',
      title: '标题咯',
      desc: '这是简介啊'
    }, {
      img: '../../images/temp/slider.jpg',
      title: '标题咯标题咯标题咯',
      desc: '这是简介啊'
    }, ]

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
   * 点击轮播图 某一项
   */
  tapHomeSwiper: function(e) {
    console.log("轮播图点击》》》", e)
    wx.showToast({
      title: '你点击的是第' + e.currentTarget.dataset.id + '张图片',
      icon: "none"
    })
  },
  /**
   * tab Item的点击事件
   */
  tapTabItem:function(e){
    console.log("自定义轮播tab点击事件", e.currentTarget.dataset.item)
    // todo 点击事件的处理
   
  }
})