/**
 * post获取请求数据
 */

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    // get请求时，显示静态表单
    if (ctx.url === '/' && ctx.method === "GET") {
        ctx.body = `<h1>koa2 request post demo</h1>
            <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button type="submit">submit</button>`;
    // post请求时，获取静态表单的数据
    } else if (ctx.url === "/" && ctx.method === "POST") {
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    }else{
        ctx.body = "404!!!";
    }
});

app.listen(3000, () => {
    console.log('start 3000,request');
});


/**
 * 解析上下文里node原生请求的POST参数
 * koa2对post请求没有封装，所有自己封装（除非用koa-bodyparser中间件）
 * @param {*} ctx 
 */
function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.addListener('data', (data) => {
                postdata += data
            })
            ctx.req.addListener("end", function () {
                let parseData = parseQueryStr(postdata)
                resolve(parseData)
            })
        } catch (err) {
            reject(err)
        }
    })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr(queryStr) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log(queryStrList)
    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=')
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    }
    return queryData
}