//加载依赖库
const myexpress = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');//日志
const uesrRouter = require('./router/user')//引用user.js
const response= require('express');
const bodyParser = require('body-parser');//post参数解析
const app = myexpress();

  // 定义日志和输出级别
  app.use(logger('dev'));
  // 定义icon图标
  app.use(favicon(__dirname + '/public/favicon.ico'))
  // 定义数据解析器
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(uesrRouter);
  console.log(__dirname + '/public/favicon.ico');
  app.use(myexpress.static(__dirname+"/public",{index:'login.html'}))
  
  
  app.listen(8888)