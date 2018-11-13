const mongoose = require('mongoose')
const glob = require('glob')
const {resolve} = require('path')
const db = "mongodb://localhost:27017/vue-koa"

// 解决mongoose 5.3.11 连接时的警告
mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)

exports.initSchemas = () =>{
  glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}
exports.connect = () => {
  let maxConnectTimes = 0
  // 连接数据库
  mongoose.connect(db)
  return new Promise((resolve, reject) => {
    /**
     * 监听数据库连接断开事件，若断开自动重连三次，如果三次都失败，则抛出错误
     */
    mongoose.connection.on('disconnected', () => {
      console.log('***********数据库断开***********')
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject()
        throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
      }
    })
    /**
     * 监听数据库连接错误事件，若错误自动重连三次，如果三次都失败，则抛出错误
     */
    mongoose.connection.on('error', err => {
      console.log('***********数据库错误***********')
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject(err)
        throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
      }
    })
    /**
     * 监听数据库连接成功事件，连接成功，maxConnectTimes 置为 0
     */
    mongoose.connection.once('open', () => {
      console.log('MongoDB connected successfully')
      maxConnectTimes = 0
      resolve()
    })
  })
}