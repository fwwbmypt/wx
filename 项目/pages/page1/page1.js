Page({
  data: {
    picture: [{
        imagePath: "/image/1.jpg",
        text:"商品1",
      },
      {
        imagePath: "/image/1.jpg",
        text: "商品2",
      },
      {
        imagePath: "/image/1.jpg",
        text: "商品3",
      }
    ]
  },
  f: function(event) {
    wx.navigateTo({
      url: '/pages/commodity/commodity'
    })
  }
})