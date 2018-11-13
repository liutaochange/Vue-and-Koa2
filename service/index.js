const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const cors = require('koa2-cors');
const { connect, initSchemas } = require('./mongose/init.js');
const bodyParser = require('koa-bodyparser');
const historyApiFallback = require('koa2-connect-history-api-fallback');
// 对 vue-router mode: history 配置
app.use(historyApiFallback({ whiteList: ['/example','/user'] }));
app.use(bodyParser());
app.use(cors());

// 路由模块化
const router = new Router();
const user = require('./app/user.js');
router.use('/user', user.routes());

app.use(router.routes());
app.use(router.allowedMethods());

;(async () => {
  await connect()
  initSchemas()
})()

app.listen(3000);