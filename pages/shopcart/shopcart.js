// pages/shopcart/shopcart.js

//全局变量 用来确定用户点击的范围
var isSelGood = false;
var isCut = false;
var isPlus = false;
var isDrop = false;
var idx = 0; //选中项的下标
var isAllSel = false; //底部全选按钮
 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    toView: '',
    money:0,
    num:1,
    list:[{
      storeName:'happy的小店',
      goods:[{
        img: "../../images/temp/slider.jpg",
        title: '饱腹小清新，健康添动力',
        price: '35.00',
        num: 1
      }, {
          img: "../../images/temp/slider.jpg",
          title: '饱腹小清新，健康添动力,饱腹小清新，健康添动力,饱腹小清新，健康添动力,饱腹小清新，健康添动力',
          price: '35.00',
          num: 1
        }, {
          img: "../../images/temp/slider.jpg",
          title: '饱腹小清新，健康添动力',
          price: '35.00',
          num: 1
        }]
    
    }, {
        storeName: 'happy的小店',
        goods: [{
          img: "../../images/temp/slider.jpg",
          title: '饱腹小清新，健康添动力',
          price: '35.00',
          num: 1
        }]

      }, {
        storeName: 'happy的小店',
        goods: [{
          img: "../../images/temp/slider.jpg",
          title: '饱腹小清新，健康添动力',
          price: '35.00',
          num: 1
        }]

      }, {
        storeName: 'happy的小店',
        goods: [{
          img: "../../images/temp/slider.jpg",
          title: '饱腹小清新，健康添动力',
          price: '35.00',
          num: 1
        }]

      }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
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
   * 点击列表项前面的圆圈 即选中商品
   * 
   * 如果点击的是店铺的圆圈 则 选中该商店的所有商品
   * 
   * 如果点击的是某一个商品的圆圈 则选中该商品
   * 
   * 需要注意的是 这里需要确定两个下标 list 和 goods 即确定是那个店铺下面的那个商品，
   * 所以这里点击事件需要向上传递 设置一个标志来确定用户点击的范围
   */
  tapSelImg:function(e){
    console.log("点击商品圆圈》》》》》》",e)
    isSelGood = true
    idx = e.currentTarget.dataset.id
  },
  /**
   * 点击 店铺前面的圆圈 选中该商店的所有商品
   */
  tapSelShopImg:function(e){
    console.log("点击店铺圆圈》》》》》》", e)
    let index = e.currentTarget.dataset.id
    let list = this.data.list

    if(list[index].isShopSel == null){
      //如果是第一次选择 则设置为true
      list[index].isShopSel = true

    }else{
      list[index].isShopSel = !list[index].isShopSel
    }

    if (list[index].isShopSel){
      //选中该店的所有商品
      list[index].goods.forEach(function(item,index){
        item.isSel = true
      })
    }else{
      //取消选择商店的所有商品
      list[index].goods.forEach(function (item, index) {
        item.isSel = false
      })
    }

    this.setData({
      list:list
    })

  },
  /**
   * 数量+1
   */
  tapPlus:function(e){
    console.log("点击+》》》》》》", e)
    isPlus = true
    idx = e.currentTarget.dataset.id
  },
  /**
   * 数量-1
   */
  tapCut: function (e) {
    console.log("点击-》》》》》》", e)
    isCut = true
    idx = e.currentTarget.dataset.id
  },
  /**
   * 删除商品
   */
  tapDrop:function(e){
    console.log("删除》》》》》》", e)
    isDrop = true
    idx = e.currentTarget.dataset.id
  },

  /**
   * 商店大范围的点击事件  所有的都传递到这里进行处理（选中商品、加、减、删除）
   */
  clickItem:function(e){
    console.log("商店条目点击事件》》》》》》", e)
    let that = this

    let index = e.currentTarget.dataset.id;
    let list = that.data.list;
    let money = that.data.money
    
    let good = list[index].goods[idx]

    //点击商品的圆圈
    if(isSelGood){
      if(good.isSel == null){
        good.isSel = true
      }else{
        good.isSel = !good.isSel
      }

      let every = list[index].goods.every(function (item, index, arr) {
        return item.isSel == true
      })

      //如果商店的所有商品都选中 则设置商店的圆圈选中
      if (every) {
        list[index].isShopSel = true
      } else {
        list[index].isShopSel = false
      }

      isSelGood = false
    }

    //点击+
    if(isPlus){
      good.num = Number(good.num )+ 1
      money += Number(good.price)
      isPlus = false
    }

    //点击-
    if(isCut){
      if (Number(good.num) > 1){
        good.num = Number(good.num) - 1
        money -= Number(good.price)

      }else{
        good.num = 1;
        wx.showToast({
          title: '至少选择一件商品',
          icon:'none'
        })
      }

      isCut = false
    }

    //删除
    if(isDrop){
      //这里仅仅执行数组中的删除动作  具体删除操作结合后台进行
      list[index].goods.splice(idx,1)
      // 删除之后 回滚到初始状态
      let toView = 'scroll-before'
      that.setData({
        toView: toView
      })

      if (list[index].goods.length < 1){
        //如果该店铺的所有商品都被删除，则删除该店铺
        list.splice(index,1)
       
      }

      wx.showToast({
        title: '删除成功',
        icon:'none'
      })

      isDrop= false
    }

    that.setData({
      list:list,
      money:money
    })
  },
  /**
   * 点击底部全选
   */
  tapSelAllImg:function(){
    let list = this.data.list
    let money = 0;
    //对状态进行反选
    if(isAllSel){
      list.map(function(item,index,arr){
        item.isShopSel = false
        item.goods.map(function(item,index,arr){
          item.isSel = false
        })
        money = 0;
        isAllSel = false;
      })
    }else{
      list.map(function (item, index, arr) {
        item.isShopSel = true
        item.goods.map(function (item, index, arr) {
          item.isSel = true
          money += Number(item.price) * Number(item.num);
        })
        isAllSel = true;
      })
    }

    this.setData({
      list:list,
      isAllSel: isAllSel,
      money: money
    })
  },

  /**
   * 模拟加载数据后 对数据的处理
   */
  loadData:function(){
   
    let that = this
    let list = that.data.list

     //默认用户没有选择任何商品
    list.map(function(item,index,arr){
      item.isShopSel = false

      item.goods.map(function(item,index,arr){
        item.isSel = false
      })
    })

    that.setData({
      list:list
    })
  }
})