const goodsControllers = require('./goods')

module.exports = async (ctx) => {
  const data = "home"
  await ctx.render('index', {
    data
  })
}