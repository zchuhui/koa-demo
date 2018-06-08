const router = require('koa-router')()
const bookController = require('./../controllers/book');

const routers = router
  .get('/query.json', bookController.query)

 
module.exports = routers;