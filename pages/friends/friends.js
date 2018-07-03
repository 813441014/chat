// pages/friends/friends.js

var intbanner = require("../../json/banner.js")

// 引入公告

var intnotice = require("../../json/notice.js")

// 推荐
var intitems = require("../../json/indexitem.js")

// 推荐
var intfollow = require("../../json/indexitem01.js")



Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner: [],
    indicatordots: true,
    initcolor: "rgba(255,255,255,1)",
    initselcolor: "rgba(248,181,250,1)",
    notice: [],
    currentTab: 0,
    kinds: [],
    follow: [],
    currswiper: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      follow: intfollow.indexlist,
      notice: intnotice.noticelist,
      kinds: intitems.indexlist
    })
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
  }
})