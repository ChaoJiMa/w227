	const router =  require('express').Router();
	//路由
	router.get('login.html',function(req,res){
		next();
	})
  router.get('/login.do',function(req,res){
    let user = req.query.txtUser;
    let pwd = req.query.txtPwd;
    if (user == '123'&& pwd == '123') {
      res.send('登录成功')
    }else{
      res.send('登录失败')
    }
  })
  router.post('/login.do',function(req,res){
    console.log(req.body);
    let uesr = req.body.txtUser;
    let pwd = req.body.txtPwd;
    if(uesr == '123' && pwd == '123'){
      res.redirect('/index.html')
    }else{
      res.send('no')
    }
	})
	module.exports = router