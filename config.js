/**
 * 小程序配置文件
 * 公共免费接口：https://blog.csdn.net/c__chao/article/details/78573737
 */

const host = 'https://api.apiopen.top'

const config = {
  host,

  //视频大纲
  videoLeadUrl: host + '/videoHomeTab',

  //视频分类
  videoRecommUrl: host + '/videoCategory',

  //每日视频推荐
  videoTodayUrl: host + "/todayVideo",

  //音乐排行榜
  musicTop: host + "/musicRankings",

  //新闻
  news: host + "/journalismApi"
}

module.exports = config