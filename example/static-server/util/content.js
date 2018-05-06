const path = require('path');
const fs = require('fs');

const dir = require('./dir')
const file = require('./file')

/**
 * 获取静态资源内容
 * @param  {object} ctx koa上下文
 * @param  {string} 静态资源目录在本地的绝对路径
 * @return  {string} 请求获取到的本地内容
 */
async function content(ctx, fullStaticPath) {

    // 封装请求资源的完绝对径
    let reqPath = path.join(fullStaticPath, ctx.url);

    // 判断请求路径是否为存在目录或者文件
    let exist = fs.existsSync(reqPath);

    let content = "";

    if (!exist) {
        content = "404!!"
    } else {

        let stat = fs.statSync(reqPath);
        
        if (stat.isDirectory()) {
            // 文件夹
            content = dir(ctx.url, reqPath)
        } else {
            // 文件
            content = await file(reqPath);
        }
    }

    return content;
}

module.exports = content