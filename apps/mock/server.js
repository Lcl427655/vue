let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./sliders.js')

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
      return res.end(JSON.stringify(hrefInfos));
    });
  }
  if(pathname === '/hrefDown'){//?id=1
    let id = parseInt(query.id);//query.id字符串
    switch (req.method) {
      case 'GET':
        if(id){

        }else{//没有id获取所有图书
          console.log(11111);
          read(function (hrefInfos) {
            return res.end(JSON.stringify(hrefInfos));
          });
        }
        break;
      case 'POST':
        break;
      case 'DELETE':
        break;
      case 'PUT':
        break;
      default:

    }
  }
}).listen(8888);
