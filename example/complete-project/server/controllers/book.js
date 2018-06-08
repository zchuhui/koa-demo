
const bookService = require('./../services/book')
var util = require("util")

module.exports = {

  /**
   * 查询book
   * @param  {obejct} ctx 上下文对象
   */
  async query(ctx) {
    
    const request = ctx.request;

    const name = request.query.name ? request.query.name : "",
      pageSize = 10;
    

    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let data = await bookService.query();
    data = util.inspect(data.data, { depth: null })
    //console.log('data3', data.data); 
    
    
    if (data) {
      result = {
        success: true,
        message: '查询成功！',
        data: data,
        code: 200
      }
    } else {
      result = {
        success: false,
        message: '查询失败！',
        data: null,
        code: 400
      }
    }

    ctx.body = result
  },
  
}