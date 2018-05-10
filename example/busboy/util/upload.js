const inspect = require('util').inspect;
const path = require('path');
const os = require('os');
const fs = require('fs');
const Busboy = require('busboy');

/**
 * 同步创建文件
 * @param {string} dirname  目录绝对地址
 * @return {boolean}        目录创建结果
 */
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

/**
 * 获取上传文件的后缀名
 * @param {string} fileName    // 上传的文件
 * @return {string}            // 后缀名 
 */
function getSuffixName(fileName) {
  let nameList = fileName.split('.');
  
  return nameList[nameList.length - 1];
}


function uploadFile(ctx,options){
  let req = ctx.req;
  let res = ctx.res;
  let busboy = new Busboy({headers:req.headers});

  let fileType = options.fileType || 'common';
  let filePath = path.join(options.path,fileType);
  let mkdirResult = mkdirsSync(filePath);
  
  return new Promise((resolve,reject)=>{
    console.log("file upload ...");
    let result = {
      success:false,
      formData:{}
    }

    // 解析请求文件事件
    busboy.on('file',function(fieldname,file,filename,encoding,mimetype){
      console.log('suffix name ', getSuffixName(filename));
      
      let fileName  = Math.random().toString(16).substr(2)+'.'+getSuffixName(filename);
      let _uploadFilePath = path.join(filePath,fileName);
      let saveTo = path.join(_uploadFilePath);

      // 保存文件到指定路径
      file.pipe(fs.createWriteStream(saveTo));

      file.on('end',function(){
        result.success = true;
        result.message = "file upload success!";

        console.log('file upload success');
        resolve();
      })
    })

    // 解析表单中其他字段信息
    busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('表单字段数据 [' + fieldname + ']: value: ' + inspect(val));
      result.formData[fieldname] = inspect(val);
    });

    // 解析结束事件
    busboy.on('finish', function () {
      console.log('文件上结束')
      resolve(result)
    })

    // 解析错误事件
    busboy.on('error', function (err) {
      console.log('文件上出错')
      reject(result)
    })

    req.pipe(busboy);
    
  })
}

module.exports = {
  uploadFile
}
