/**
 * 使用jsonp的格式输出接口
 * 这样前端就可以跨域访问数据
 */

const Koa = require('koa')
const Jsonp = require('koa-jsonp')
const app = new Koa()

// 使用插件
app.use(Jsonp());

app.use(async (ctx)=>{
  
  // 输出的数据
  let returnData = {
    success:1,
    data:{
      text:'this is jsonp',
      date: new Date().getDate(),
    }
  }

  // 直接输出
  ctx.body = returnData;
})

app.listen(3000, () => {
  console.log('[demo] jsonp is starting at port 3000')
})