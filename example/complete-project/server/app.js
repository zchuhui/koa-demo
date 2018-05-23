const path = require('path')
const Koa = require('koa')
const convert = require('koa-convert')
const views = require('koa-views') 
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')

const config = require('../config')
const routers = require('./routers/index')

const app = new Koa();

app.use(koaLogger());
app.use(bodyParser());

// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname, './../static')
))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port)

console.log('the server is start at port:'+config.port);



