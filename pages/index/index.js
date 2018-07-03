//index.js

// 引入banner

var intbanner = require("../../json/banner.js")

// 引入公告

var intnotice = require("../../json/notice.js")

// 推荐
var intitems = require("../../json/indexitem.js")

// 推荐
var intfollow = require("../../json/indexitem01.js")



//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner: [],
    indicatordots:true,
    initcolor:"rgba(255,255,255,1)",
    initselcolor:"rgba(248,181,250,1)",
    notice: [],
    currentTab:0,
    kinds:[],
    follow:[],
    currswiper:0

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      banner: intbanner.bannerlist,
      notice : intnotice.noticelist,
      kinds: intitems.indexlist,
      follow: intfollow.indexlist
      
    })
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
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
    /** 
   * 点击tab切换 
   */
  pagenow: function (e) {

    var that = this;

    if (this.data.currswiper === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currswiper: e.target.dataset.current
      })
    }
  },
  bindChangeswi:function(e){
    var that = this;
    that.setData({ currswiper: e.detail.current });
  },
  seeman:function(){
    wx.navigateTo({
      url: "../seeman/seeman"
    });
  },
  talking:function(){
    wx.navigateTo({
      url: "../talking/talking"
    });
  }
})
