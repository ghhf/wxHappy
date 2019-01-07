// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:'view',
        name:'test',
        open:false,
        pages:['v1','v2','v3','v4']
      }, {
        id: 'view',
        name: 'test',
        open: false,
        pages: ['v1', 'v2', 'v3', 'v4']
      }, {
        id: 'view',
        name: 'test',
        open: false,
        pages: ['v1', 'v2', 'v3', 'v4']
      }, {
        id: 'view',
        name: 'test',
        open: false,
        pages: ['v1', 'v2', 'v3', 'v4']
      }
    ]
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
    wx.reportAnalytics('enter_home_programmatically', {})
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:"分享测试标题",
      path:'pages/music/music'
    }
  },

  kindToggle(e){
    const id = e.currentTarget.id
    const list = this.data.list
    for(let i = 0, len = list.length; i < len; ++i){
      if(list[i].id === id){
        list[i].open = !list[i].open
    
      }else{
        list[i].open = false
      }
    }

    this.setData({
      list
    })

    wx.reportAnalytics('click_view_programmatically', {data})
  }
})