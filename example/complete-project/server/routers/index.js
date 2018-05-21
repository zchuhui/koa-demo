const router = require('koa-router')()

const api = require('./api')
const home = require('./home')
const goods = require('./goods')

router.use('/api', api.routes(), api.allowedMethods());
router.use('/goods', goods.routes(), goods.allowedMethods());
router.use('/', home.routes(), home.allowedMethods());


module.exports = router;

