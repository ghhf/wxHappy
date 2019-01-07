// pages/video/video.js
var common = require('../../pages/common/common.js');

const videoLeadUrl = require('../../config.js').videoLeadUrl;
const videoTodayUrl = require('../../config.js').videoTodayUrl;

console.log(videoLeadUrl);
console.log(videoTodayUrl);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["每日推荐", "分类推荐"],
    currentNavtab: "0",
    banners:[{
      title:"1",
      openpath:"../../index/index",
      imgUrl:"http://img.kaiyanapp.com/8bf284aed36f12ea874defb29c790af9.png?imageMogr2/quality/60/format/jpg"
    },
    {
      title: "2",
      openpath: "../../index/index",
      imgUrl: "http://img.kaiyanapp.com/8bf284aed36f12ea874defb29c790af9.png?imageMogr2/quality/60/format/jpg"
    },
    {
      title: "3",
     openpath:"../../index/index",
      imgUrl:"http://img.kaiyanapp.com/8bf284aed36f12ea874defb29c790af9.png?imageMogr2/quality/60/format/jpg"
    }, ],
    indicatorDots:false,
    autoplay:true,
    interval:4000,
    duration:300,
    circular:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.refresh();
    
  },

  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  refresh:function(){
    common.getData(videoLeadUrl)
      .then(function (data) {
        console.log(data)
      });
  },

  //网络请求
  http: function (url,callback) {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/html'
      },
      success: function (res) {
        console.log(res);
        callback(res);
      },
      fail:function(){

      }
    })
  },
  
  //网络请求成功回调
  callback:function(res){
    var videos = [];
    var datas = res.data.result;
    var videoImgs = [];
    console.log("datas" + datas);

    for (var idx in datas){

      this.setData({
        // videos:videos,
      })
    }

    // console.log("videos" + videos)
    
  },

  // 轮播图点击事件
  bannerTap:function(event){
    wx,wx.navigateTo({
      url: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})