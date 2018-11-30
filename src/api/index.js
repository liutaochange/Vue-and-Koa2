import axios from 'axios'
const request = axios.create({
  baseURL: '/mall',
  timeout: 5000,
  withCredentials: true
})

// 获取首页数据
const getIndex = () => request({
  method: 'post',
  url: '/main/getIndex'
})

// 用户注册
const registerUser = (userName, password) => request({
  method: 'post',
  url: '/user/register',
  data: {
    userName: userName,
    password: password
  }
})

// 用户登录
const loginUser = (userName, password) => request({
  method: 'post',
  url: '/user/login',
  data: {
    userName: userName,
    password: password
  }
})
// 商品详情
const getGoodsInfo = (goodsId) => request({
  method: 'post',
  url: '/goods/getDetailGoodsInfo',
  data: {
    goodsId: goodsId,
  }
})
// 获取商品分类 大类信息
const getCategoryList = () => request({
  method: 'post',
  url: '/goods/getCategoryList'
})
// 获取商品分类 子类信息
const getCategorySubList = (categoryId) => request({
  method: 'post',
  url: '/goods/getCategorySubList',
  data: {
    categoryId
  }
})
/**
 * 根据商品类别 获取商品信息的接口
 */
const getGoodsListByCategorySubID = (categorySubId, page) => request({
  method: 'post',
  url: '/goods/getGoodsListByCategorySubID',
  data: {
    categorySubId,
    page
  }
})
export { getIndex, registerUser, loginUser, getGoodsInfo, getCategoryList, getCategorySubList, getGoodsListByCategorySubID }