import {request} from "../../requests/index.js"
//Page Object
Page({
  data: {
    // 轮播图数组
    swiperList:[],
    // 分类数组
    catesList:[]
  },
  // 页面开始加载 则触发的生命周期事件
  onLoad: function(){
    this.getSwiperList();
    this.getCatesList();
  },
  getSwiperList(){
    // 发送异步请求获取轮播图
    // wx.request({
    //   url: 'https://api.it120.cc/jfyhdcm/banner/list',
    //   success: (result)=>{
    //       this.setData({
    //         swiperList:result.data.data
    //       })
    //   }
    // })
    request({url:"https://api.it120.cc/jfyhdcm/banner/list"})
    .then(result=>{
      console.log(result);
      var tempList=[];
      for(var i=0;i<result.data.data.length;i++){
        if(result.data.data[i].type==="index")
          tempList.push(result.data.data[i]);
      }
      console.log(tempList);
        this.setData({
          swiperList:tempList
        })
    })
  },
  getCatesList(){
    request({url:"https://api.it120.cc/jfyhdcm/banner/list"})
    .then(result=>{
      var tempList=[];
      for(var i=0;i<result.data.data.length;i++){
        if(result.data.data[i].type==="cates")
          tempList.push(result.data.data[i]);
      }
      console.log(tempList);
        this.setData({
          catesList:tempList
        })
    })
  }
});