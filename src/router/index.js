import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/pages/Index.vue')
const Register = () => import('@/pages/Register.vue')
const Login = () => import('@/pages/Login.vue')
const Goods = () => import('@/pages/Goods.vue')
const CategoryList = () => import('@/pages/CategoryList.vue')
const Cart = () => import('@/pages/Cart.vue')
const Mine = () => import('@/pages/Mine.vue')
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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/goodInfo/:id',
      name: 'goodInfo',
      component: Goods
    },
    {
      path: '/category',
      name: 'categoryList',
      component: CategoryList
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})