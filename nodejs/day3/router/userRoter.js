// 路由
const router = require('express').Router();
//引用myaql
const db = require('./sqlHelp')
//登陆
router.post('/login',(req,res)=>{
	let user = req.body.txtUser;																//根据输入框的name获取输入内容
	let pwd = req.body.txtPwd;
	// console.log(user)
	// console.log(pwd)
	let sql = 'SELECT * FROM USER WHERE user = ? AND pwd = ?';
	db.query(sql,[user,pwd],function(err,data){
		// console.log(err);
		// console.log(data);
		if(err){																									//如果有err 错误的信息
			res.send('数据库出错，请联系管理员')
		}else{
			if(data.length>0){
				res.send('登陆成功')
			}else{
				res.send('用户名或密码出错')
			}
		}
	})
})
//注册
router.post('/reg',(req,res)=>{
	let user = req.body.txtUser;
	let pwd = req.body.txtPwd;
	const sql = 'insert into user(user,pwd) (?,?)'
	db.query(sql,[user,pwd],function(err,data){
		// console.log(err);
		// console.log(data);
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
//显示
router.get('/studentList',(req,res)=>{
	let cur = req.query.cur;
	let pageSize = req.query.perSize;
	// console.log(cur);
	// console.log(pageSize);
	let start = (cur-1)*pageSize;
	// console.log(start);
	var sql = 'select * from student limit ?,?'
	db.query(sql,[start,Number(pageSize)],function(err,data){
		if(err){
			res.send({code:500,message:'数据库出错，联系管理员'})
			// console.log(err)
		}else{
			res.send({code:200,data:data})
		}
	})
})
//显示行数
router.get('/total',(req,res)=>{
	var sql = 'select count(*) as num from student'
	db.query(sql,[],function(err,data){
		if(err){
			res.send({code:500,message:'数据库出错，联系管理员'})
			// console.log(err)
		}else{
			console.log(data);
			res.send({code:200,num:data[0].num})
		}
	})
})
//删除
router.get('/student/del',(req,res)=>{
	let id = req.query.id;
	// console.log(id);
	let sql = 'delete from student where id = ?'
	db.query(sql,[id],(err,data)=>{
		if(err){
			// console.log(err);
			res.send({code:500,message:'数据库出错'})
		}else{
			if(data.affectedRows>0){
				res.send({code:200,message:'删除成功'})
			}else{
				res.send({code:200,message:'删除失败'})
			}
		}
	})
})
//查询
router.get('/search',(req,res)=>{
	let name = req.query.studentname;
	let classId = req.query.classid;
	let sql = 'select * from student where 1=1';
	let param = [];
	console.log(name);
	console.log(classId);
	if(name != ''){
		sql += ' and name like ?'
		param.push('%'+name+'%')
	}
	if(classId != -1){
		sql += ' and banji=?'
		param.push(classId)
	}
	
	db.query(sql,param,function(err,data){
		if(err){
			res.send({code:500,message:'数据库出错'})
			console.log(err);
		}else{
			res.send({code:200,data:data})
		}
	})
})
//班级查询
router.get('/getClassList',(req,res)=>{
	let sql = 'select * from class';
	db.query(sql,[],function(err,data){
		if(err){
			res.send({code:500,message:'数据库出错'})
			console.log(err);
		}else{
			res.send({code:200,data:data})
		}
	})
})
module.exports = router;																			//暴露