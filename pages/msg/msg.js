// pages/msg/msg.js
var app = getApp();
var url = "https://api.apiopen.top/videoCategory"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgLists:[],
    refresh:false
  },
 
  loading:false,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.reqData(url,this.renderData)
  },

// 请求数据
  reqData:function(url,callback,appendOrrefresh){
    var that = this;
    this.loading = true;
    var now = new Date().getTime();

    wx.request({
      url: url,
      data:{},
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res.data);
        callback && callback.call(null,res.data,appendOrrefresh)
      },

      complete:function(){
        that.loading = false;
        if(appendOrrefresh == 1){
          that.setData({
            refresh:false
          })
        }
      }
    })
  },
  // 解析获取的数据
  fromatData:function(items){
   
    var msgList = [];
    for(var item of items){
      console.log(item);
      
      var newItem = {
        id:item.data.id,
        title: item.data.description,
        time:item.data.title,
        img:item.data.icon,
      };
      msgList.push(newItem);
    }

    return msgList;
  },
// 把数据渲染到页面中 appendOrRefresh  1 刷新   2 加载
  renderData:function(rsp,appendOrRefresh){
    if(rsp.code != 200){
      console.error('request error');
      return;
    }

    if (!rsp.result || !rsp.result.itemList || rsp.result.itemList.length < 1){
      console.log('something wrong with the respones data');
      return;
    }

    var list = this.fromatData(rsp.result.itemList);
   
     //加载
    if(appendOrRefresh === 2){
      for(var item of list){
        this.setData({
          ['msgLists[' + (curLen++) + ']']:item
        });
      }
    }
    //刷新
    else if(appendOrRefresh === 1){
      var newList = [].concat(list, this.data.msgLists);
      this.setData({
        msgLists:newList
      });
    }

    else{
      this.setData({
        msgLists:list
      })
    }
  },
  // 列表点击事件 
  bindItemTap:function(event){
    console.log(event);
    wx.navigateTo({
      url: '../../pages/music/music',
    })
  },

  //底部上滑加载更多
  loadMore:function(){
    if(this.loading){
      console.info('loading is processing......');
      return;
    }

    console.log('loading more...');
    var news = this.data.news;
    this.reqData(url,this.renderData,2);
  },

  //顶部下拉时刷新
  refresh:function(event){
    if(!this.data.refresh){
      var that = this;
      console.log('prepare to refresh...');
      this.setData({
        refresh:true
      });

      setTimeout(function(){
        that.refresh();
      },400);
      return;
    }
    console.log('refreshing...');

    var news = this.data.news;
    that.reqData(url,this.renderData,1)
  }
})