import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// 全局引入不推荐
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// 本项目采用按需引入 借助 babel-plugin-import 插件
// 按需引入
const autoRem = () => {
  //得到手机屏幕的宽度
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  if (htmlWidth > 750) {
    htmlWidth = 750
  }
  //得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0]
  //设置根元素字体大小
  htmlDom.style.fontSize= (htmlWidth/20) + 'px'
}
autoRem()
window.onresize = autoRem
import { Button, Row, Col, Swipe, SwipeItem, Lazyload  } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload,{preLoad: 1.3})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
