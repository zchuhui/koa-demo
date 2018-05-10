/**
 * 使用ejs模板
 */

const Koa = require('koa');
const views = require('koa-views');
const path = require('path');

const app = new Koa();

app.use(
  views(path.join(__dirname, './view'), {
    extension: 'ejs'
  })
);

app.use(async (ctx) => {
  let title = 'hello ejs';

  await ctx.render('index', { title: title });
})

app.listen(3000, () => {
  console.log('start 3000');
})

