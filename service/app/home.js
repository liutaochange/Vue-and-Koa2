const Router = require('koa-router')
const util = require('util')
const router = new Router()
const fs = require('fs')
const readAsync = util.promisify(fs.readFile)

router.post('/getIndex', async (ctx) => {
  let response
  try {
    await readAsync('./data_json/index.json', 'utf8').then((data) => {
      response = {
        code: 200,
        data: data
      }
    })
  } catch (error) {
    response = {
      code: 500,
      message: error
    }
  }
  ctx.body = response
})

module.exports = router;
