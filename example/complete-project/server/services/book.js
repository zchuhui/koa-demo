

const validator = require('validator')
const Axios = require('axios')

const book = {

  /**
   * 查询
   * @param  {String}      关键字
   * @return {Number}      返回条数
   */
  async query(keyword,pageSize) {
    let result = await Axios.get('https://api.douban.com/v2/book/search?q=1')  //goodsModel.query(keyword,pageSize)
      
    return result
  },


}

module.exports = book