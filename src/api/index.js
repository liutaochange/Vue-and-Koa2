import axios from 'axios'
const LOCALURL = "http://localhost:3000"
const request = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5be91f1869c4eb462295e420',
  timeout: 5000,
  withCredentials: true
})

/**
 *  获取首页数据
 */
export const getIndex = () =>  request.get('/example/index')

/**
 *  用户注册
 */
export const registerUser = (userName, password) =>  request({
  baseURL: LOCALURL, 
  method: 'post',
  url: '/user/register',
  data: {
    userName: userName,
    password: password
  }
})