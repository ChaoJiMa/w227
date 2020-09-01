const router = require('express').Router();//路由
const mySql = require('./mysql');//引入mysql

router.post('/login',(req,res)=>{				//登录
	let user = req.body.txtUser;
	let pwd = req.body.txtPwd;						//获取ajax传输的值
	// console.log(user);
	// console.log(pwd);
	let sql = 'SELECT * FROM user WHERE user = ? AND pwd = ?';	//sql语句
	mySql.query(sql,[user,pwd],function(err,data){
		if(err){
			console.log(err);
			res.send({code:201})
		}else{
			if(data.length>0){
				// console.log(data);
				res.send({
					code:200,
					message:'登录成功',
					data:data
				})
			}else{
				res.send('用户名或密码出错')
			}
		}
	})
})
router.post('/zhuce',(req,res)=>{				//注册
	let user = req.body.User;
	let pwd = req.body.Pwd;
	let phone = req.body.phone;
	let emli = req.body.emli;	
	let name = req.body.name;
	let img = req.body.img
	let sql = 'insert into user values(null,?,?,?,?,?,?)'
	mySql.query(sql,[user,pwd,phone,emli,name,img],function(err,data){
		if(err){
			console.log(err);
			res.send({code:201})
		}else{
			if(data.affectedRows>0){
				res.send(
					{
						code:200,
						message:'注册成功',
						data:data
					}
				)
			}else{
					{
						res.send('注册失败')
					}
				}
		}
	})
})
router.get('/id',(req,res)=>{
	let id = req.query.id
	let sql = 'select * from user where id=?'
	mySql.query(sql,[id],function(err,data){
		if(err){
			console.log(err);
		}else{
			if(data.length>0){
				res.send(
					{
						code:200,
						data:data
					}
				)
			}
		}
	})
})
module.exports = router;																			//暴露