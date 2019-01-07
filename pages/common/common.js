/**
 * 网络请求
 */
function getData(url){
  return new Promise(function(resolve,reject){
    wx.request({
      url: url,
      data:{},
      header:{
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        resolve(res)
        console.log(res)
      },
      fail:function(res){
        reject(res)
        console.log(res)
      }
    })
  })
}

module.exports.getData = getData;