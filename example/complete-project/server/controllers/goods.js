
const goodsService = require('./../services/goods')
const userCode = require('./../codes/user')

module.exports = {

  /**
   * 查询商品
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
    
    let data = await goodsService.query({name:name}, pageSize);
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