// pages/silderTab/silderTab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 0,//当前tab索引
    tabs: [
      {
        text: '全部订单',
      }, {
        text: '待付款',
      }, {
        text: '待发货',
      }, {
        text: '待收货',
      }, {
        text: '待评价',
      }
    ],
    imgUrls: [
      "../../images/temp/slider.jpg",
      "../../images/temp/slider.jpg",
      "../../images/temp/slider.jpg",
      "../../images/temp/slider.jpg",
      "../../images/temp/slider.jpg",
      "../../images/temp/slider.jpg"
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var tabs = this.data.tabs

    tabs[0].isSel = true

    this.setData({
      tabs: tabs
    })
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

  },

  /**
   * 切换tab
   */
  tapTab: function (e) {
    let that = this

    var idx = e.currentTarget.dataset.id
    var tabs = that.data.tabs

    // 设置选中的效果
    tabs.map(function (item, index, arr) {
      if (index === idx) {
        item.isSel = true
      } else {
        item.isSel = false
      }
    })

    that.setData({
      tabs: tabs,
      curNav: idx,
    })
  }
})