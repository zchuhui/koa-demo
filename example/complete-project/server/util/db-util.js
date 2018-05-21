
const MongoClient = require('mongodb').MongoClient;
const config = require('../../config')

/**
 * 搜索
 * @param {Object} keyword 
 * @param {Number} pageSize 
 */
let query = (keyword, pageSize) => {

  return new Promise((resolve, reject) => {
    // 连接数据库
    MongoClient.connect(config.db_url, (err, db) => {
      if (err) { throw err; }

      // 选择库
      let myDB = db.db(config.db_store);
      
      myDB.collection(config.db_tab.goods).find(keyword).limit(pageSize).toArray((err, res) => {
        if (err) reject(err);
        resolve(res)
        db.close();
      })
    })
  })
}

module.exports = {
  query,
}



