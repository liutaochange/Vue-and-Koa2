// vue.config.js
module.exports = {
  devServer: {
    port: '8088',
    disableHostCheck: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}