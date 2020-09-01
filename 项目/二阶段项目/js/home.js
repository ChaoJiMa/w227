/*检测安全*/ 
var a= JSON.parse(localStorage.getItem("mimachangdu"))
    if(a>=4){
        $(function(){
        var obj={
            el:$(".div1"),
            max:100,
            start:1//增加开始的初始值
        }
        obj.el.find('.but').on('click', function() {
            $(function(){
                var obj={
                    el:$(".div1"),
                    max:100,
                    start:1//增加开始的初始值
                }
                up(obj); 
                function up(obj){
                    var item=obj.el;
                    var num=obj.max;
                    var start=obj.start;
                    time=setInterval(function(){
                        start++;
                        if(start>num){
                        start=num;
                        clearInterval(time);
                        } 
                        item.find('.time').text(start);
                    },1)
                }
                $('.div1').css('background-image', 'linear-gradient(270deg ,#8BC34A 1%,#4CAF50)')
            })  
        })
        up(obj); 
        function up(obj){
            var item=obj.el;
            var num=obj.max;
            var start=obj.start;
            time=setInterval(function(){
                start++;
                if(start>num){
                start=num;
                clearInterval(time);
                } 
                item.find('.time').text(start);
            },1)
        }
        $('.div1').css('background-image', 'linear-gradient(270deg ,#8BC34A 1%,#4CAF50)')
    })
    }else if(a==3){
        $(function(){
        var obj={
            el:$(".div1"),
            max:80,
            start:1//增加开始的初始值
        }
        obj.el.find('.but').on('click', function() {
            $(function(){
                var obj={
                    el:$(".div1"),
                    max:80,
                    start:1//增加开始的初始值
                }
                up(obj); 
                function up(obj){
                    var item=obj.el;
                    var num=obj.max;
                    var start=obj.start;
                    time=setInterval(function(){
                        start++;
                        if(start>num){
                        start=num;
                        clearInterval(time);
                        } 
                        item.find('.time').text(start);
                        
                    },1)
                }
                $('.div3').text('☆☆☆☆')
                $('.div2').text('账号存在安全风险，请修改密码')
                $('.div1').css('background-image', 'linear-gradient(270deg ,#ffac2f 1%,#ea663b )')
            })  
        })
        up(obj); 
        })
        function up(obj){
            var item=obj.el;
            var num=obj.max;
            var start=obj.start;
            time=setInterval(function(){
                start++;
                if(start>num){
                start=num;
                clearInterval(time);
                }
                item.find('.time').text(start);
            },1)
        }
        $('.div3').text('☆☆☆☆')
        $('.div2').text('账号存在安全风险，请修改密码')
        $('.div1').css('background-image', 'linear-gradient(270deg ,#ffac2f 1%,#ea663b )')
    }else if(a<3){
        $(function(){
        var obj={
            el:$(".div1"),
            max:60,
            start:1//增加开始的初始值
        }
        obj.el.find('.but').on('click', function() {
            $(function(){
                var obj={
                    el:$(".div1"),
                    max:60,
                    start:1//增加开始的初始值
                }
                up(obj); 
                function up(obj){
                    var item=obj.el;
                    var num=obj.max;
                    var start=obj.start;
                    time=setInterval(function(){
                        start++;
                        if(start>num){
                        start=num;
                        clearInterval(time);
                        } 
                        item.find('.time').text(start);
                        
                    },1)
                }
                $('.div3').text('☆☆')
                $('.div2').text('账号存在严重安全风险，请修改密码')
                $('.div1').css('background-image', 'linear-gradient(270deg ,#f46036 1%,#e53b36 )')
            })  
        })
        up(obj); 
        })
        function up(obj){
            var item=obj.el;
            var num=obj.max;
            var start=obj.start;
            time=setInterval(function(){
                start++;
                if(start>num){
                start=num;
                clearInterval(time);
                }
                item.find('.time').text(start);
            },1)
        }
        $('.div3').text('☆☆')
        $('.div2').text('账号存在严重安全风险，请修改密码')
        $('.div1').css('background-image', 'linear-gradient(270deg ,#f46036 1%, #e53b36)')
    }
/*判断账号权限*/
    var qx= JSON.parse(localStorage.getItem("quanxian"))
    switch(qx){
				case 1:
                    $('#ls,#xs').css({'display':'none'})
					break;
				case 2:
                     $('#xz,#xs').css({'display':'none'})
					break;
				case 3:
					$('#xz, #ls').css({'display':'none'})
					break;
            }
/*获取信息*/
    var sj = JSON.parse(localStorage.getItem("sj"))
    var teacher = JSON.parse(localStorage.getItem("teacher"))
    var student = JSON.parse(localStorage.getItem("student"))
    var ymsj = JSON.parse(localStorage.getItem("ymsj"))
    
    var yonghu = JSON.parse(localStorage.getItem("yonghu"))
    var jishu=0;
        for(var i=0;i<ymsj.length;i++){
            var jishu=i;
            if(yonghu == ymsj[i].yhm){
                console.log(jishu)
                break;
            }
        }
        console.log((ymsj[jishu].tp).replace(/#/g,'/'))
    $('#tx')[0].src = (ymsj[jishu].tp).replace(/#/g,'/')
    $('#name').text(ymsj[jishu].name)
    $('#yhm').text(ymsj[jishu].yhm)
    $('#qx').text(qx+'级')

    $('.ban1').on("mouseenter mouseleave",".ys",function(event){
        if (event.type === 'mouseenter') {
        $(event.target).css('color','#1945f5')
        } else {
        $(event.target).css('color','#a6b7fa')
    }
    })
    /*获取设备名*/
    var xh= JSON.parse(localStorage.getItem("xh"))
    /*获取登录时间*/
    var shijian= JSON.parse(localStorage.getItem("shijian"))
    /*获取登录地址*/
    $.ajax({
            url: 'http://api.map.baidu.com/location/ip?ak=ia6HfFL660Bvh43exmH9LrI6',
            type: 'POST',
            dataType: 'jsonp',
            success:function(data) {
                $('.diqu').html(data.content.address_detail.province + "," + data.content.address_detail.city)
            }
    });
    /*获取ip地址*/
    $(function() {
        $('.ip').html(returnCitySN["cip"]);
    })
    /*点击时间*/
    $('.button').click(function(){
        var czsj = new Date().toLocaleString()
        var cz = $(this).attr('data-wo')
        var czip = returnCitySN["cip"]
        $('#minggan').append(
            '<div class="col-xs-4 ">'+czsj+'</div>'+
            '<div class="col-xs-4 ">'+cz+'</div>'+
            '<div class="col-xs-4 ">'+czip+'</div>'
            )
        var minggancaozuo = [{
            '时间':czsj,
            '操作记录':cz,
            'IP':czip,
        }]
    })
    /*渲染*/
    $('.shebei').text(xh);
    $('.shijian').text(shijian);
    
    /*判断手机*/
    if(ymsj[jishu].shou!= null){
        var shouji = (ymsj[jishu].shou).substr(0,3) + "****" + (ymsj[jishu].shou).substr(8)
        $('#shouji').text('手机已绑定')
        $('#sjgh').text('去更换')
        $('#souj').text('原手机号：'+shouji)
        $('#myModalLabel').text('请输入原手机号：')
        $('#shji').append('<input type="number" id="yuansj" placeholder=原手机号>'
        +'<div>'+'<input type="number" id="xinsj" placeholder=新手机号>'+'</div>'
        )
       
    }else(
        $('#shouji').text('手机未绑定'),
        $('#myModalLabel').text('请输入需要绑定的手机号：'),
        $('#shji').append('<input type="number" placeholder="请输入手机号">')
    )
    function tijiao(){
        var yuansj = $('#yuansj').val();
        var shouj = $('#xinsj').val();
        var guize = /^1[3-9]\d{9}$/
        if(yuansj == ymsj[jishu].shou){
                $('#yuansj').val('')
                if(guize.test(shouj) == false){
                    $('#tishi').text('请填写正确新电话号码!!')
                    $('#xinsj').val('')
                    // console.log(shouji)
                }else{
                    $('#xinsj').val('')
                    $('#tishi').text('')
                    console.log(ymsj[jishu]) 
                    ymsj[jishu].shou = shouj;
                    localStorage.setItem('ymsj',JSON.stringify(ymsj));
                }
                
        }else{
            $('#tishi').text('请填写正确旧电话号码!!')
        }
    }