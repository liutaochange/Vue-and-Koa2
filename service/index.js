const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const cors = require('koa2-cors');
app.use(cors());
const { connect, initSchemas } = require('./mongose/init.js');
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


const user = require('./app/user.js');
router.use('/user', user.routes());

;(async () => {
  await connect()
  initSchemas()
})()

app.listen(3000);