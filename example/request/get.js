/**
 * get获取请求数据,url上的参数
 * http://localhost:3000/page/user?a=1&b=2
 */

const Koa = require('koa');

const app  = new Koa();

app.use(async (ctx)=>{
    let url = ctx.url;
    let request = ctx.request;
    let request_query = request.query;
    let request_queryString = request.querystring;

    let ctx_query = ctx.query;
    let ctx_queryString = ctx.querystring;

    ctx.body = {
        url,
        request_query,
        request_queryString,
        ctx_query,
        ctx_queryString
    }
});

app.listen(3000,()=>{
    console.log('start 3000,request');
})