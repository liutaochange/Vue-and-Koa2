import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/pages/Index.vue')
const Register = () => import('@/pages/Register.vue')
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})