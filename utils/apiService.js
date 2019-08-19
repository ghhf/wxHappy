/** 封装小程序的网络请求  promise**/
const baseUrl = 'https://yuyue.eyoungroup.cn';

const http = ({ url = '', param = {}, ...other } = {}) => {
  wx.showLoading({
    title: '请求中，请耐心等待..',
    icon:'loading'
  });
  let timeStart = Date.now();
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: param,
      header: {
        'content-type': 'application/json' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
      },
      ...other,
      complete: (res) => {
        wx.hideLoading();
        console.log(`耗时${Date.now() - timeStart}`);
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }
    })
  })
}

const getUrl = (url) => {
  if (url.indexOf('://') == -1) {
    url = baseUrl + url;
  }
  return url
}

// get方法
const _get = (url, param = {}) => {
  return http({
    url,
    param
  })
}

const _post = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'post'
  })
}

const _put = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'put'
  })
}

const _delete = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'put'
  })
}
module.exports = {
  baseUrl,
  _get,
  _post,
  _put,
  _delete
}

/** ajax */
var handle = {
  callNum: 0,//全局变量，表示当前队列中的异步请求数量，不得超过5个
  queryJH: function (args) {
    wx.showToast({
      title: "数据加载中",
      icon: "loading",
      duration: 10000
    });
    var ajaxQueue = queue.getQueue("wxAjaxQueue");//初始化请求队列
    var fire = function () {//在每次请求结束后被调用
      if (handle.callNum < 5 && ajaxQueue.callbackArray.length > 0) {
        ajaxQueue.fire();//触发队列中下个ajax请求
        handle.callNum = handle.callNum + 1;
      }
    };
    var query = function () {//请求方法体
      var appKey = constant.appKey;
      var url = args.url;
      var data = args.data || {};
      var complete = args.complete;
      var fail = args.fail;
      data.key = appKey;//聚合数据的appkey

      wx.request({
        url: url,
        data: data,
        complete: function (resp) {
          fire();
          if (typeof complete === "function") {
            complete(resp);
          }
          if (ajaxQueue.getSize() <= 0) {
            wx.hideToast();
          }
          handle.callNum--;
        }
      });
    };
    if (ajaxQueue && ajaxQueue.callbackArray.length >= 0) {//程序入口，
      ajaxQueue.add(args, query);//在队列中将请求的方法体和请求参注册，并等待调用
      fire();
    }
  },
  setStorage: function () {
    var key, data, complete, fail;
    if (arguments.length === 1 && us.isObject(arguments[0]) && !us.isArray(arguments[0])) {//异步
      key = arguments[0].key;
      data = arguments[0].data;
      complete = arguments[0].complete;
      fail = arguments[0].fail;
      wx.setStorage({
        key: key,
        data: data,
        complete: function (data) {
          if (us.isFunction(complete)) {
            complete(data);
          }
        }
      });
    } else {//同步
      key = arguments[0];
      data = arguments[1];
      try {
        return wx.setStorageSync(key, data);
      } catch (e) {
        console.error(e);
      }
    }
  },
  getStorage: function () {
    var key, complete, fail;
    if (arguments.length === 2) {//异步
      key = arguments[0];
      complete = arguments[1];
      wx.getStorage({
        key: key,
        complete: function (data) {
          if (us.isFunction(complete)) {
            complete(data);
          }
        }
      });
    } else {//同步
      key = arguments[0];
      try {
        return wx.getStorageSync(key);
      } catch (e) {
        console.error(e);
      }
    }
  },
  clearStorage: function () {
    try {
      return wx.clearStorageSync();
    } catch (e) {
      console.error(e);
    }
  }

};