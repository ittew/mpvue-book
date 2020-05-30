import Fly from 'flyio/dist/npm/wx'
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
} */

{
  "retCode": "000000",
  "retDesc": "SUCCESS",
  "rspBody": {
    "couponRuleList": [
       {
        "operateId": "3530",
        "saleType": "7",
        "saleCode": "100~9999:7",
        "saleName": "湖北移动话费充值营销",
        "saleDesc": "限100元使用",
        "isFixed": "1",
        "usable": "0",
        "pCardName": "话费加赠券",
        "pCardInfo": "限100元使用",
        "pcardUseRule": "1、仅限湖北移动用户本机登录及使用，不可转赠、不与其他优惠同时享受；2、一笔充值订单仅限使用一张话费加赠券；3、在有效期前使用，逾期作废，赠送金额与充值金额一同到账。",
        "pCardNo": "4471642619154194",
        "effectiveTime": "20200510102657",
        "expireTime": "20200517235959",
        "couponValue": "7",
        "marketName": "湖北专属"
      },{
        "operateId": "1946",
        "saleType": "8",
        "saleCode": "1~100:1",
        "saleName": "不不不不E币特权：话费9.9折券",
        "saleDesc": "获得该卡券后，3个月内在移动商城充值可享受充值9.9折优惠！",
        "isFixed": "1",
        "usable": "1",
        "pCardName": "不不不不话费折扣券",
        "pCardInfo": "充值9.9折",
        "pcardUseRule": "1.仅限在中国移动APP中使用。\r\n2.仅限获得该券的手机号码登录为本机充值使用，不可转赠，不可为他人充值。\r\n3.本券自发放到账之日起3个月内有效，不能与其他优惠同享，请在有效期前使用，逾期作废。\r\n4.获赠话费与充值金额一同到账。所赠话费不转账、不提现、不退换。\r\n5.若使用卡券但未完成支付，券将锁定无法再次使用，支付有效期内可在“我的订单”查询后继续支付。",
        "pCardNo": "7103864844867090",
        "effectiveTime": "20191011143245",
        "expireTime": "20200131235959",
        "couponValue": "0.99",
        "marketName": "本省"
      }
    ]
  }
}
