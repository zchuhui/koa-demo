/**
 * 连接mongoDB数据库
 * 教程：http://www.runoob.com/nodejs/nodejs-mongodb.html
 */

const MongoClient = require('mongodb').MongoClient;
// 数据库地址与端口
const url = "mongodb://localhost:27017/";

// 连接数据库
MongoClient.connect(url,(err,db)=>{
  if (err) {
    throw err;
  }

  // 选择runoob库
  let myDB = db.db('runoob');

  // 在site表中插入数据
  let myObj = {name:'admin',password:'123456'};
  myDB.collection("site").insertOne(myObj,(err,res)=>{
    if(err) throw err;

    console.log("insert success!");
    db.close();
  })
})