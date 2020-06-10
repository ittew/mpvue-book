## mpvue入门
官网：`http://mpvue.com/`

## 初始化mpvue项目
* 创建项目 `vue init mpvue/mpvue-quickstart my-project`
* 安装依赖 `cd my-project` `npm install`
* 运行 `npm run dev`

## 打开微信开发者工具
* 设置Appid
* 勾选不校验合法域名

## 集成scss
`npm i sass-loader node-sass -D`

## 引入vant-weapp组件库
* `npm i vant-weapp -S --production`
* 引入组件
```js
// app.json 中引入
"usingComponents": {
  "van-button": "vant-weapp/dist/button/index"
}
// 使用
<van-button type="primary">按钮</van-button>
```
* 修改构建配置 将vant-app打包到dist目录中
```js
// 修改webpack.base.config.js
if (/^wx$/.test(PLATFORM)) {
  baseWebpackConfig = merge(baseWebpackConfig, {
    plugins: [
      new CopyWebpackPlugin([{
        from: resolve('node_modules/vant-weapp/dist'),
        to: resolve('dist/wx/vant-weapp/dist'),
        ignore: ['.*']
      }])
    ]
  })
}
```

## 集成mpvue-router-patch插件
`npm i mpvue-router-patch`
```js
import MpvueRouterPtach from 'mpvue-router-patch'
Vue.use(MpvueRouterPtach)
```

## 集成flyio
`npm i -S flyio`
```js
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
```

## 开发searchbar组件
