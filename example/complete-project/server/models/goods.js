const dbUtils = require('./../util/db-util.js')

const goods = {

  /**
   * 搜索商品
   * @param {String} keyword 
   * @param {Number} pageSize 
   */
  async query(keyword, pageSize) {
    let result = await dbUtils.query(keyword, pageSize)
    return result
  },

}

module.exports = goods