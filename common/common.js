//用户登陆
function userLogin() {
  wx.checkSession({
    success: function () {
      // session_key 未过期，并且在本生命周期一直有效
    },
    fail: function () {
      //session_key 已经失效，需要重新执行登录流程
      onLogin()//重新登录
    }
  })
}

function onLogin() {
  wx.login({
    success: function (res) {
      console.log('登录》》》》》',res)
      if (res.code) {
        //发起网络请求

        // wx.request({
        //   url: 'Our Server ApiUrl',
        //   data: {
        //     code: res.code
        //   },
        //   success: function (res) {
        //     const self = this
        //     if ("逻辑成功") {
        //       //获取到用户凭证 存儲 3rd_session 
        //       var json = JSON.parse(res.data.Data)
        //       wx.setStorage({
        //         key: "third_Session",
        //         data: json.third_Session
        //       })
        //       getUserInfo()
        //     }
        //     else {

        //     }
        //   },
        //   fail: function (res) {

        //   }
        // })
      }
    },
    fail: function (res) {

    }
  })

}

function getUserInfo() {
  wx.getUserInfo({
    success: function (res) {
      var userInfo = res.userInfo
      userInfoSetInSQL(userInfo)
    },
    fail: function () {
      userAccess()
    }
  })
}

function userInfoSetInSQL(userInfo) {
  wx.getStorage({
    key: 'third_Session',
    success: function (res) {
      wx.request({
        url: 'Our Server ApiUrl',
        data: {
          third_Session: res.data,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          gender: userInfo.gender,
          province: userInfo.province,
          city: userInfo.city,
          country: userInfo.country
        },
        success: function (res) {
          // if (逻辑成功) {
          //   //SQL更新用户数据成功
          // }
          // else {
          //   //SQL更新用户数据失败
          // }
        }
      })
    }
  })
}