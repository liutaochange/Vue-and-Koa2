const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const {
  connect,
  initSchemas
} = require('./mongose/init.js');
const bodyParser = require('koa-bodyparser');
const historyApiFallback = require('koa2-connect-history-api-fallback');
// 对 vue-router mode: history 配置
app.use(historyApiFallback({
  // 添加白名单，数据接口的请求不做重定向，︿(￣︶￣)︿非数据接口的请求重定向为index.html
  whiteList: ['/main', '/user', '/goods']  
}));
app.use(bodyParser());

const router = new Router();

// 路由模块化 首页数据
const home = require('./app/home.js');
router.use('/main', home.routes(), home.allowedMethods());


// 路由模块化 用户登录注册模块
const user = require('./app/user.js');
router.use('/user', user.routes(), user.allowedMethods());


// 路由模块化 商品详情模块
const goods = require('./app/goods.js');
router.use('/goods', goods.routes(), goods.allowedMethods());

app.use(router.routes());
app.use(router.allowedMethods());


;(async () => {
  await connect()
  initSchemas()
})()

app.use(async (ctx) => {
  ctx.body = `listen at 3000`
})

app.listen(3000, () => {
  console.log('listen 3000')
});