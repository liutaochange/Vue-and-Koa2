import Vue from 'vue'
import App from './App.vue'
// 全局引入不推荐
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// 本项目采用按需引入 借助 babel-plugin-import 插件
// 按需引入
import { Button } from 'vant'
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
