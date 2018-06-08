const router = require('koa-router')()

const api = require('./api')
const home = require('./home')
const goods = require('./goods')
const book = require('./book')

router.use('/api', api.routes(), api.allowedMethods());
router.use('/goods', goods.routes(), goods.allowedMethods());
router.use('/book', book.routes(), book.allowedMethods());
router.use('/', home.routes(), home.allowedMethods());


module.exports = router;

