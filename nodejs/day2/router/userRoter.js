// 路由
const router = require('express').Router();
//引用myaql
const db = require('./sqlHelp')
const { query } = require('express');
//登陆
router.post('/login',function(req,res){
	let user = req.body.txtUser;																//根据输入框的name获取输入内容
	let pwd = req.body.txtPwd;
	let sql = 'SELECT * FROM USER WHERE user = ? AND pwd = ?';
	db.query(sql,[user,pwd],function(err,data){
		console.log(err);
		console.log(data);
		if(err){																									//如果有err 错误的信息
			res.send('数据库出错，请联系管理员')
		}else{
			if(data.length>0){
				res.redirect('index.html')
			}else{
				res.send('用户名或密码出错')
			}
		}
	})
})
//注册
router.post('/reg',function(req,res){
	let user = req.body.txtUser;
	let pwd = req.body.txtPwd;
	const sql = 'insert into user(user,pwd) (?,?)'
	db.query(sql,[user,pwd],function(err,data){
		console.log(err);
		console.log(data);
		if(err){
			res.send('数据库出错,联系管理员')
		}else{
			if(data.affectedRows > 0){
				res.send('<script> alert("注册成功");location.href = "login.html" </script>')			//先弹出提示注册成功然后跳转登陆页面
			}else{
				res.send('注册失败')
			}
		}
	});
})
//
router.get('/studentList',function(req,res){
	var sql = 'select * from student'
	db.query(sql,[],function(err,data){
		if(err){
			res.send({code:500,message:'数据库出错，联系管理员'})
			console.log(err)
		}else{
			res.send({code:200,data:data})
		}
	})
})


module.exports = router;																			//暴露