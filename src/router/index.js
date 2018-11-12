import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/pages/Index.vue')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    }
  ]
})