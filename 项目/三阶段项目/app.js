//引用模块
const myexpress = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./router/router')																		//引用路由
const app = myexpress();

//配置
app.use(logger('dev'))																															//开发日志
// bodyparser 的配置
app.use(bodyParser.json());																													//支持json
app.use(bodyParser.urlencoded({ extended: false }));																//url解码

app.use(userRouter)																																	//配置动态路由 bodyparser必须在他前面 之后再是静态资源的配置

app.use(myexpress.static(__dirname+'/public',{index:'apple.html'}))									//静态资源路径
app.use(favicon(__dirname+'/public/images/2.ico'))																	//ico路径

app.listen(8888)
console.log('服务启动')
