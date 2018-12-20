let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./sliders.js');

function read(callback) {
  fs.readFile('./HrefDownInfo.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      return callback([]);
    } else {
      callback(JSON.parse(data));
    }
  })
}

http.createServer((req, res) => {
  let {pathname, query} = url.parse(req.url, true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  res.setHeader('Content-type', 'application/json;charset=utf8');
  if (req.method == "OPTIONS") {
    return res.end();
  }
  if (pathname === '/sliders') {
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hotDown') {
    read(function (hrefInfos) {
      setTimeout(() => {
        return res.end(JSON.stringify(hrefInfos));
      },2000);
    });
  }
  if (pathname === '/page') {
    let page = parseInt(query.page) || 1;//起始页
    let pageSize = parseInt(query.pageSize) || 5;//每页条数
    let PageHrefInfos = {};
    read(function (hrefInfos) {
      PageHrefInfos.totalPage = hrefInfos.length;
      //0-3 4-7 8-11
      PageHrefInfos.hrefInfos = hrefInfos.slice((page - 1) + pageSize * (page - 1), page - 1 + pageSize * page);
      return res.end(JSON.stringify(PageHrefInfos));
    });
  }
  if(pathname === '/hrefDown'){//?id=1
    let id = parseInt(query.id);//query.id字符串
    switch (req.method) {
      case 'GET':
        if(id){
          read(function (hrefInfos) {
            let hrefInfo = hrefInfos.find(item => item.id === id);
            if(!hrefInfo) hrefInfo = {};
            return res.end(JSON.stringify(hrefInfo));
          });
        }else{//没有id获取所有图书
          read(function (hrefInfos) {
            return res.end(JSON.stringify(hrefInfos));
          });
        }
        break;
      case 'POST':
        break;
      case 'DELETE':
        return res.end(JSON.stringify('{"flag":true}'));
        break;
      case 'PUT':
        if(id){
          let str = '';
          req.on('data' , data => {
            str += data;
          });
          req.on('end' , () => {
          });
        }
        return res.end(JSON.stringify('{"flag":true}'));
        break;
      default:
    }
  }
  fs.stat('.' + pathname , function (err,status) {
    console.log(pathname);
    if(err){
      res.statusCode = 404 ;
      res.end('NOT FOUND');
    }else {
      fs.createReadStream('.' + pathname).pipe(res);
    }
  })
}).listen(8888);
