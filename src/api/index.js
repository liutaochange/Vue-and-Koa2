import axios from 'axios'
// const LOCALURL = "http://localhost:3000"
const request = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5be91f1869c4eb462295e420',
  timeout: 5000,
  withCredentials: false
})

// 获取首页数据
const getIndex = () =>  request.get('/example/index')

// 用户注册
const registerUser = (userName, password) =>  request({
  baseURL: '', 
  method: 'post',
  url: '/user/register',
  data: {
    userName: userName,
    password: password
  }
})

// 用户登录
const loginUser = (userName, password) =>  request({
  baseURL: '', 
  method: 'post',
  url: '/user/login',
  data: {
    userName: userName,
    password: password
  }
})
// 商品详情
const getGoodsInfo = (goodsId) =>  request({
  baseURL: '', 
  method: 'post',
  url: '/goods/getDetailGoodsInfo',
  data: {
    goodsId: goodsId,
  }
})

export { getIndex, registerUser, loginUser, getGoodsInfo }