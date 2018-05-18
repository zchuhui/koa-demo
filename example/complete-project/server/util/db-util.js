const MongoClient = require('mongodb').MongoClient;

const config = require('../../config')

// 连接数据库
MongoClient.connect(config.db_url, (err, db) => {
  if (err) {
    throw err;
  }

  // 选择库
  let myDB = db.db(config.db_store);

  // 在site表中插入数据
  let myObj = { name: 'admin', password: '123456' };
  myDB.collection("site").insertOne(myObj, (err, res) => {
    if (err) throw err;

    console.log("insert success!");
    db.close();
  })
})