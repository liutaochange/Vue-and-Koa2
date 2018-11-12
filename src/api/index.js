import axios from 'axios'
const request = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5be91f1869c4eb462295e420',
  timeout: 5000
})

/**
 *  获取首页数据
 */
export const getIndex = () =>  request.get('/example/index')
