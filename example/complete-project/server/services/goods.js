/**
 * goods业务
 */

const validator = require('validator')
const goodsModel = require('./../models/goods')
const userCode = require('./../codes/user')

const goods = {

  /**
   * 查询
   * @param  {String}      关键字
   * @return {Number}      返回条数
   */
  async query(keyword,pageSize) {
    let result = await goodsModel.query(keyword,pageSize)
    return result
  },


}

module.exports = goods