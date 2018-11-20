// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: '9099',
    disableHostCheck: true,
    proxy: {
      '/main': {
        target: 'http://localhost:3000'
      },
      '/user': {
        target: 'http://localhost:3000'
      },
      '/goods': {
        target: 'http://localhost:3000'
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  }
}