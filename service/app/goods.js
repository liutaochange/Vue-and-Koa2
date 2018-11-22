const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
const fs = require('fs')

/**
 * 插入所有的商品数据
 * http://localhost:3000/goods/insertAllGoodsInfo
 */
router.get('/insertAllGoodsInfo', (ctx) => {
  fs.readFile('./data_json/goods.json', 'utf8', (err, data) => {
    if (err) {
      console.error('读取文件出错！', err)
      return
    }
    data = JSON.parse(data)
    let saveCount = 0
    const Goods = mongoose.model('Goods')
    data.RECORDS.map((value) => {
      let newGoods = new Goods(value)
      newGoods.save().then(() => {
        saveCount++
        console.log('成功' + saveCount)
      }).catch(error => {
        console.log('失败：' + error)
      })
    })
  })
  ctx.body = "开始导入所有商品信息的数据"
})

/**
 * 插入所有的分类数据
 * http://localhost:3000/goods/insertAllCategory
 */
router.get('/insertAllCategory', (ctx) => {
  fs.readFile('./data_json/category.json', 'utf8', (err, data) => {
    if (err) {
      console.error('读取文件出错！', err)
      return
    }
    data = JSON.parse(data)
    let saveCount = 0
    const Category = mongoose.model('Category')
    data.RECORDS.map((value) => {
      let newCategory = new Category(value)
      newCategory.save().then(() => {
        saveCount++
        console.log('成功' + saveCount)
      }).catch(error => {
        console.log('失败：' + error)
      })
    })
  })
  ctx.body = "开始导入分类信息的数据"
})


/**
 * 插入所有的分类的子类的数据
 * http://localhost:3000/goods/insertAllCategorySub
 */
router.get('/insertAllCategorySub', (ctx) => {
  fs.readFile('./data_json/category_sub.json', 'utf8', (err, data) => {
    if (err) {
      console.error('读取文件出错！', err)
      return
    }
    data = JSON.parse(data)
    let saveCount = 0
    const CategorySub = mongoose.model('CategorySub')
    data.RECORDS.map((value, index) => {
      console.log(value)
      let newCategorySub = new CategorySub(value)
      newCategorySub.save().then(() => {
        saveCount++
        console.log('成功插入' + saveCount)
      }).catch(error => {
        console.log('插入失败:' + error)
      })
    })
  })
  ctx.body = "开始导入子类信息的数据"
})


/**
 * 获取商品详细信息的接口
 */
router.post('/getDetailGoodsInfo', async (ctx) => {
  let goodsId = ctx.request.body.goodsId
  const Goods = mongoose.model('Goods')
  let response
  try {
    await Goods.findOne({
      ID: goodsId
    }).exec()
      .then((result) => {
        response = {
          code: 200,
          message: result
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