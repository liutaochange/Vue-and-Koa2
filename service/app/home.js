const Router = require('koa-router')
const router = new Router()
const fs = require('fs')

router.post('/getIndex', (ctx) => {
  fs.readFile('./data_json/index.json', 'utf8', (err, data) => {
    if (err) {
      console.error('读取文件出错！', err)
      ctx.body = {
        code: 500,
        message: err
      }
      return
    }
    data = JSON.parse(data)
    ctx.body = {
      code: 200,
      data: data
    }
  })
})

module.exports = router;
