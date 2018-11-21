import axios from 'axios'
const request = axios.create({
  baseURL: '/api', 
  timeout: 5000,
  withCredentials: true
})

// 获取首页数据
const getIndex = () =>  request({
  method: 'post',
  url: '/main/getIndex'
})

// 用户注册
const registerUser = (userName, password) =>  request({
  method: 'post',
  url: '/user/register',
  data: {
    userName: userName,
    password: password
  }
})

// 用户登录
const loginUser = (userName, password) =>  request({
  method: 'post',
  url: '/user/login',
  data: {
    userName: userName,
    password: password
  }
})
// 商品详情
const getGoodsInfo = (goodsId) =>  request({
  method: 'post',
  url: '/goods/getDetailGoodsInfo',
  data: {
    goodsId: goodsId,
  }
})

export { getIndex, registerUser, loginUser, getGoodsInfo }