// pages/test/welcome/welcome.js
var apiService = require('../../../utils/apiService.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentItemId:2,
    indicatorDots: false, //显示面板指示点
    autoplay: true, //自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular:false,
    imgUrls:[
      "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
      "../../images/temp/slider.jpg",
      "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
      "../../images/temp/slider.jpg",
      "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
      "../../images/temp/slider.jpg"
    ],

    ivs: [
      {
        img: "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
      }, {
        img: "../../images/temp/slider.jpg",
      }, {
        img: "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"
      }, {
        img: "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640"
      },
    ],


    lists:[
      // {
      //   img:'../../images/temp/slider.jpg',
      //   title:'标题咯',
      //   desc:'这是简介啊'
      // }, {
      //   img: '../../images/temp/slider.jpg',
      //   title: '标题咯',
      //   desc: '这是简介啊这是简介啊这是简介啊这是简介啊这是简介啊这是简介啊这是简介啊这是简介啊'
      // }, {
      //   img: '../../images/temp/slider.jpg',
      //   title: '标题咯标题咯标题咯标题咯标题咯标题咯标题咯',
      //   desc: '这是简介啊'
      // }, {
      //   img: '../../images/temp/slider.jpg',
      //   title: '标题咯标题咯标题咯标题咯标题咯标题咯',
      //   desc: '这是简介啊'
      // }, {
      //   img: '../../images/temp/slider.jpg',
      //   title: '标题咯标题咯标题咯',
      //   desc: '这是简介啊'
      // }, {
      //   img: '../../images/temp/slider.jpg',
      //   title: '标题咯',
      //   desc: '这是简介啊'
      // }, {
      //   img: '../../images/temp/slider.jpg',
      //   title: '标题咯',
      //   desc: '这是简介啊'
      // }, {
      //   img: '../../images/temp/slider.jpg',
      //   title: '标题咯标题咯标题咯',
      //   desc: '这是简介啊'
      // },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData()
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

  },

  /**
   * 获取微信信息
   */
  onGotUSerINfo:function(e){
    console.log("userInfo>>>>>>>>>>",e)
  },

  // swiperChange:function(e){
  //   console.log('滑动',e)
  //   console.log("length>>>>", this.data.imgUrls.length)
  //   var currentItemId = e.detail.current;
  //   if (currentItemId == this.data.imgUrls.length - 1) {
  //     var imgUrls = this.data.imgUrls
  //     imgUrls[currentItemId + 1] = imgUrls[0]
  //     this.setData({
  //       current:0
  //     })
  //   }
  // }

  tapImg:function(e){
    console.log('tapImg============>',e)
  },

  tapTxt:function(e){
    console.log('tapTxt============>', e)

  },

  loadData:function(e){

    let adParams = {
      page: 0,
      rows: 5
    }

    let params = {
      page: 1,
      rows: 4,
      category3Id: 2
    }
   
   Promise.all([
     apiService._post('/content/getContentList.do', adParams),
     apiService._post('/goods/getGoodsList.do',params),
   ]).then(result =>{
     console.log('result>>>',result)
    
   }).catch(e =>{
     console.log('catch>>>',e)
   })
  },
  /**
   * 点击轮播图
   */
  tapSwiperItem:function(e){
    console.log("轮播图点击》》》",e)
  }
})