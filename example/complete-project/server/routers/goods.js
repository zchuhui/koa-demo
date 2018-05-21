const router = require('koa-router')()
const goodsController = require('./../controllers/goods');

const routers = router
  .get('/query.json', goodsController.query)


module.exports = routers;