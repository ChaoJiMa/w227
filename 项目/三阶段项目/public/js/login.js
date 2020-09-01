//登录
$('#btnLogin').click(function(){
	let user = $('#user').val()
	let pwd = $('#pwd').val()
	$.ajax({
		type:'post',																	//方式
		url:'/login',																	
		data:{'txtUser':user,'txtPwd':pwd},						//传值
		success:function(data){												//验证结果
			if(data.code == 200){
				location.href='apple.html?id:'+data.data[0].id
			}else{
				alert('用户名或密码错误')
			}
		}
	})
})
//注册
$('#zhuce').click(function(){
	$('h1').html('请注册。')
	$('#form').css({'display':'none'})
	$('#form2').css({'display':'block'})

	$("#pic").click(function() {
		$("#upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
		$("#upload").on("change", function() {
				var objUrl = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
				if (objUrl) {
						$("#pic").attr("src", objUrl); //将图片路径存入src中，显示出图片
				}
		});
	});
	//建立一?可存取到?file的url
  function getObjectURL(file) {
		var url = null;
		if (window.createObjectURL != undefined) { // basic
				url = window.createObjectURL(file);
		}else if (window.webkitURL != undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file);
		}
		return url;
	}
	 //上传头像到服务器
	 $('#zhuceLogin').click(function(){
		 let pic =$('#pic')[0].currentSrc;
		 let phone = $('#phone').val()
			let emli = $('#emli').val()
			let name = $('#name').val()
			let user = $('#zcuser').val()
			let pwd = $('#zcpwd').val()
		 if(pic == null || phone == '' || emli == '' || name == '' || user == '' || pwd == ''){
			 alert('不能为空')
		 }else{
				console.log(pic);
				console.log(phone,emli,name,user,pwd);
				$.ajax({
						url: "/zhuce",
						type: "post",
						data: {
							'User':user,
							'Pwd':pwd,
							'phone':phone,
							'emli':emli,
							'name':name,
							'img':pic
						},
						success: function(data) {
								console.log(data);
								if(data.code == 200){
									alert('注册成功')
									location.href='login.html'
								}
								// var res = data;
								// $("#resimg").append("<img src='/" + res + "'>")
						}
				})
		 }
	})
})