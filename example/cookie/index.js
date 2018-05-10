/**
 * 使用cookie
 * 访问http://localhost:3000/index，然后在控制台输入document.cookie即可查看
 */
const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {

  if (ctx.url === '/index') {
    ctx.cookies.set(
      'cid',
      'hello cookie',
      {
        domain: 'localhost',                // cookie所在的域名
        path: '/index',                     // cookie所在的路径
        maxAge: 10 * 60 * 1000,             // cookie 有效时长
        expires: new Date('2017-02-15'),    // cookie 失效时间
        httpOnly: false,                    // 是否只用于http请求
        overwrite: false,                   // 是否允许重写
      }
    )
    ctx.body = 'cookiet is ok';
  } else {
    ctx.body = "hello world";
  }
})

app.listen(3000, () => {
  console.log("start 3000")
});

