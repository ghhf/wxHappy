//base地址 47.104.198.222
//const host = 'https://pengmaster.com/party/'
 const host = 'https://love.wangshan.top/'
const image = host + 'wechat/image/'
const marry = host + 'wechat/marry/'
//接口统一入口地址
const mobileIn = host + 'mobile/mobileIn.do'

//婚礼地图等信息查询
const invite = host + 'invite/search.do'

//点赞
const benediction = host + 'benediction/like.do'


//点赞查询
const benedictionSearch = host + 'benediction/search.do'

//登录
const login = host + 'login/wxLogin.do'

//绑定接口
const bindwx = host + 'login/bindwx.do'

//评论列表
const messageSearch = host + 'message/search.do'

//评论
const messageInsert = host + 'message/insert.do'

//图片分类
const imgsType = host + 'imgsType/search.do'

//图片
const imgs = host + 'imgs/search.do'

//-----------------图片具体地址------------------
//-----通用图片地址
const imageError = image + 'error.png'

//-----splash
const splashWave = image + 'more/wave.png'
const splashLoading = image + 'index/loading.gif'

//-----home
const homeBanner = image + 'home_banner.png'
const homeAvater = image + 'home_avater.png'
const homePartyRecord = image + 'home_party_cost_record_query.png'
const homeServiceGuide = image + 'home_service_guide.png'

//-----my
const myBanner = image +'my_banner.jpg'
const myXinde = image +'xinde.png'
const myXiaoxi = image +'xiaoxi.png'
const myZan = image +'zan.png'
const myArrowChart = image +'arrow_chart.png'
const qrCode = marry + 'qr_code/group_qr_code.png'

//-----分享图片
const mShareImg = host + 'wechat/marry/ozfq_zip/HY2A1167.jpg'


//-----
const versionInfoDetailShow = image + 'party_home_show.png'

module.exports = {
  image, invite,
  host, mobileIn, login, messageSearch, benediction,
  imageError, invite, bindwx, imgsType, imgs,
  splashWave, splashLoading, benedictionSearch, messageInsert,
  homeBanner, homeAvater, homePartyRecord, homePartyRecord, homeServiceGuide,
  myBanner, myXinde, myXiaoxi, myZan, myArrowChart,
  versionInfoDetailShow, mShareImg
}
