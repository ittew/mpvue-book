/* import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
const host = 'test'
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  console.log(request)
  // request.headers["X-Tag"] = "flyio"
  // request.headers['content-type']= 'application/json'
  // request.headers = {
  //   "X-Tag": "flyio",
  //   'content-type': 'application/json'
  // }
  // let authParams = {
  //   //公共参数
  //   "categoryType": "SaleGoodsType@sim",
  //   "streamNo": "wxapp153570682909641893",
  //   "reqSource": "MALL_H5",
  //   "appid": "string",
  //   "timestamp": new Date().getTime(),
  //   "sign": "string"
  // }
  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === '') {
      delete request.body[val]
    }
  })
  request.body = {
    ...request.body
    // ...authParams
  }
  return request
})
// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    return response.data // 请求成功之后将返回值返回
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    console.log(err)
    wx.hideLoading()
    if (err) {
      return '请求失败'
    }
  }
)
// 设置请求基地址
fly.config.baseURL = host
// 设置超时
fly.config.timeout = 5000
export default fly

/* // 定义公共headers
fly.config.headers = {xx:5, bb:6, dd:7}
// 设置超时
fly.config.timeout = 10000
// 设置请求基地址
fly.config.baseURL = 'https://wendux.github.io/'
// 设置公共的Get参数
fly.config.params = {'token': 'testtoken'} */

// this.$fly.request({
//   method: "post", // post/get 请求方式
//   url: "/mms/country/queryValidZoneListForMallHome",
//   body: {}
// }).then(res => {
//   console.log(res)
// })

// 请求配置选项
/* {
  headers:{}, //http请求头，
  baseURL:"", //请求基地址
  timeout:0,//超时时间，为0时则无超时限制
  //是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
  parseJson:true,
  params:{}, //默认公共的url get参数
  withCredentials:false //跨域时是否发送cookie
}
 */

function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}
export function get (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        resolve(response)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
}
export function post (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        resolve(response)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
}
