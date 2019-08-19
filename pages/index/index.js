//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo') 
  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log('用户信息',e)
   
    if (e.detail.errMsg == "getUserInfo:ok") {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      // todo 用户允许授权，已经获取到用户信息 可进行用户绑定操作

    } else {
      wx.showToast({
        title: '请授权',
        icon: 'none'
      })
    }


    // wx.request({
      // url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx17a8be2cf6d2aef1&secret=fcf5059db90339844a39422635709ee6&js_code=033Z5KXS0tAyWZ1QZxVS0zmNXS0Z5KXy&grant_type=033Z5KXS0tAyWZ1QZxVS0zmNXS0Z5KXy',
    //   data: {},
    //   header: {
    //     'content-type': 'json'
    //   },
    //   success: function (res) {
    //     console.log("openid信息获取", res)
    //     //{"session_key":"wEHteWzFAI3GwR\/OnUycPg==","openid":"ojWHy5OZ8AX8Y0cnGTFUWjO14QL4"}
    //     //{"session_key":"5ty7LYtZWGOPPqbrQ2FXTA==","openid":"ojWHy5OZ8AX8Y0cnGTFUWjO14QL4"}
    //     var openid = res.data.openid //返回openid
    //     var session_key = res.data.session_key //返回session_key
    //   }
    // })
  }
})
