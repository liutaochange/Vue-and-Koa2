// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
      config.devServer = {
        port: '9099',
        disableHostCheck: true,
        proxy: {
          '/mall': {
            target: 'http://localhost:3000/',
            pathRewrite: { '^/mall': '' }
          }
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  }
}