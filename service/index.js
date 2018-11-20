const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
// const cors = require('koa2-cors');
// app.use(cors());
const {
  connect,
  initSchemas
} = require('./mongose/init.js');
const bodyParser = require('koa-bodyparser');
const historyApiFallback = require('koa2-connect-history-api-fallback');
// 对 vue-router mode: history 配置
app.use(historyApiFallback({
  whiteList: ['/main', '/user', '/goods']
}));
app.use(bodyParser());


const router = new Router();

// 路由模块化 首页数据
const home = require('./app/home.js');
router.use('/main', home.routes());


// 路由模块化 用户登录注册模块
const user = require('./app/user.js');
router.use('/user', user.routes());


// 路由模块化 商品详情模块
const goods = require('./app/goods.js');
router.use('/goods', goods.routes());

app.use(router.routes());
app.use(router.allowedMethods());

;(async () => {
  await connect()
  initSchemas()
})()

app.listen(3000);