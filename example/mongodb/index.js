/**
 * 连接mongoDB数据库
 * 教程：http://www.runoob.com/nodejs/nodejs-mongodb.html
 */

const MongoClient = require('mongodb').MongoClient;


// 数据库信息
const conf = {
  url: "mongodb://localhost:27017/",
  database: 'test_db',
  collection: {
    users: 'users',
    goods: 'goods'
  }
}


// 连接数据库
MongoClient.connect(conf.url, (err, db) => {
  if (err) {
    throw err;
  }

  // 选择test_db库
  let myDB = db.db(conf.database);

  // 创建集合
  // myDB.createCollection('goods', function (err, res) {
  //   if (err) throw err;
  //   console.log("创建goods集合成功!");
  //   db.close();
  // });


  // 在user集合插入一条数据
  // let myObj = { name: 'admin1', password: '123456' };
  // myDB.collection(conf.collection.users).insertOne(myObj, (err, res) => {
  //   if (err) throw err;
  //   console.log("insert success!");
  //   db.close();
  // });


  // 插入多条数据
  // let arr = [
  //   { name: '小米 MAX2', sort: 2, price: 3199, introduction: '小米 max 手机，性能666~' },
  //   { name: '锤子R1', sort: 3, price: 3299, introduction: '锤子R1，体验666~' },
  //   { name: '华为 P20 Pro', sort: 4, price: 5499, introduction: '华为P20,拍照666~' },
  // ];
  // myDB.collection(conf.collection.goods).insertMany(arr, (err, res) => {
  //   if (err) throw err;
  //   console.log("插入的文档数量为: " + res.insertedCount);
  //   db.close();
  // })


  // 查询数据
  // let whereStr = 'admin';  // {"name":'admin'}
  // myDB.collection(conf.collection.users).find(whereStr).toArray((err,result)=>{
  //   if(err) throw err;
  //   console.log(result);
  //   db.close();
  // })


  // 修改数据(单条)
  // const whereStr = {"name":"admin2"};               // 查询
  // const updateStr = {$set:{"password":"666666"}};   // 要修改的字段
  // myDB.collection(conf.collection.users).updateOne(whereStr,updateStr,(err,result)=>{
  //   if(err) throw err;
  //   console.log("update success!");
  //   db.close();
  // });


  // 修改数据(多条)
  // const whereStr = {"name":"admin1"};               // 查询条件
  // const updateStr = {$set:{"sex":"man"}};           // 要修改的字段
  // myDB.collection(conf.collection.users).updateMany(whereStr,updateStr,(err,result)=>{
  //   if(err) throw err;
  //   console.log(result.result.nModified + " update success!");
  //   db.close();
  // });


  // 删除数据（单条）
  // const whereStr = {'name':'admin4'}
  // myDB.collection(conf.collection.users).deleteOne(whereStr,(err,result)=>{
  //   if(err) throw err;
  //   console.log("delete success!");
  //   db.close();
  // })


  // 删除数据（多条）
  // const whereStr = {'sex':'man'}
  // myDB.collection(conf.collection.users).deleteMany(whereStr,(err,obj)=>{
  //   if(err) throw err;
  //   console.log("删除了"+obj.result.n+"条!");
  //   db.close();
  // })


  // 排序
  // const mysort = {sort:-1};   // 按 sort 字段排序，1为升序，-1为降序
  // myDB.collection(conf.collection.goods).find().sort(mysort).toArray((err,result)=>{
  //   if(err) throw err;
  //   console.log(result);
  //   db.close();
  // });


  // 查询分页
  // limit()里面的数值，为返回的条数
  // skip()里面的数值，指跳过前面的多少条
  // .skip(3).limit(3)指：每页返回3条,返回第二页
  // myDB.collection(conf.collection.goods).find().skip(3).limit(3).toArray((err, result) => {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

  // $lookup 实现左连接
  myDB.collection('orders').aggregate(
    [
      {
        $lookup:
          {
            from: 'goods',
            localField: 'goods_id',
            foreignField: '_id',
            as: 'orderdetails'
          }
      }
    ],
    (err, res) => {
      if (err) throw err;
      console.log(res);
      db.close()
    });


})