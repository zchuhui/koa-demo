const Koa = require('koa');
const convert = require('koa-convert');
const fs = require('fs');
const Router = require('koa-router');

const app = new Koa();

/**
 * 用Promise封装读取文件的异步方法
 * @param {string} page 
 * @return {Promise}
 */
function render(page) {
    return new Promise((resolve, reject) => {
        let viewUrl = `./view/${page}`;
        fs.readFile(viewUrl, "binary", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

// 新建一个home路由
let home = new Router();
home.get('/', async (ctx) => {
    ctx.body = await render('index.html');
})


// 新建一个page路由,并配置多个子路由
let page = new Router()
page.get('/', async (ctx) => {
    ctx.body = "page page"
})
.get('/404', async (ctx) => {   
    ctx.body = await render('404.html');
})
.get('/todo', async (ctx) => {
    ctx.body = await render('todo.html');
})


// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(3000);

console.log('start 3000!!');