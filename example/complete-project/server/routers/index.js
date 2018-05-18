const router = require('koa-router')()

const api = require('./api')
const home = require('./home')

router.use('/api', api.routes(), api.allowedMethods());
router.use('/', home.routes(), home.allowedMethods());


module.exports = router;

