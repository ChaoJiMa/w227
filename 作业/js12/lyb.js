zhanghao=[
    {
        name:'Giao',
        zh:'111',
        mm:'111',
    },
    {
        name:'老八',
        zh:'222',
        mm:'222',
    },
    {
        name:'药水哥',
        zh:'333',
        mm:'333',
    },
];
var yhxb= -1;
var jishu= 0;
var username = document.getElementById('username');
var pwd = document.getElementById('pwd');
var p = document.getElementById('p');
var log = document.getElementById('log');
 function zh(){
    if(username.value.match(/[0-9]{3}/) == null){
        p.innerHTML='请输入正确的账号！';
    }else{
        p.innerHTML='';
    }
}
 function mm(){
    if(pwd.value.match(/[0-9a-zA-Z]{3}/) == null){
        p.innerHTML='请输入正确的密码！';
    }else{
        p.innerHTML='';
    }
}

 function login(){
    var land=false;
    for(var j=0;j<zhanghao.length;j++){
        if(username.value == zhanghao[j].zh && pwd.value == zhanghao[j].mm){
            localStorage.yhxb=j; //保存
            land = true;
            break;
        }
    }
    if(land==true){
        window.location.href = '留言板.html';
    }else{
        jishu++;
        p.innerHTML = '账号密码错误，剩余次数'+(3-jishu)+'次';
    }
    if(jishu>3){
        p.innerHTML = '账号密码已锁定';
        log.style.opacity = 0;
    }
}
var img= document.getElementById('img');
var mingzi = document.getElementById('mingzi');
    if(localStorage.yhxb==0){
        img.src='./img/giao.jpg';
        mingzi.innerHTML='Giao桑';
    }
    if(localStorage.yhxb==1){
        img.src='./img/laoba.jpeg';
        mingzi.innerHTML='老八';
    }
    if(localStorage.yhxb==2){
        img.src='./img/yaoshui.jpg';
        mingzi.innerHTML='药水哥';
    }
    
var but= document.getElementById('but');
var text=document.getElementById('text');
var lyjl= document.getElementById('lyjl');
var jishu2=1; // 留言计数

but.onclick=function(){
    if(text.value==''){
        alert('请输入内容');
        return;
    }
    var lys = document.getElementById('lys');   //留言数
            lys.innerHTML = '('+(jishu2++)+')';
    var divClass=document.createElement('div');//创建div
        divClass.setAttribute('class','div');//给div添加class名
        document.getElementById("lyjl").appendChild(divClass);//吧div添加到lyjl里

    var imgClass = document.createElement('img');
        imgClass.setAttribute('class','img');
        divClass.appendChild(imgClass);
        if(localStorage.yhxb==0){
            imgClass.src='./img/giao.jpg';
        }
        if(localStorage.yhxb==1){
            imgClass.src='./img/laoba.jpeg';
        }
        if(localStorage.yhxb==2){
            imgClass.src='./img/yaoshui.jpg';
        }
    var pClass=document.createElement('p');//创建p  
        pClass.setAttribute('class','p');
        divClass.appendChild(pClass);
        if(localStorage.yhxb==0){
            pClass.innerHTML='Giao桑';
        }
        if(localStorage.yhxb==1){
            pClass.innerHTML='老八';
        }
        if(localStorage.yhxb==2){
            pClass.innerHTML='药水哥';
        }
    var pnrClass = document.createElement('p');
        pnrClass.setAttribute('class','pnr');
        pnrClass.innerHTML = text.value;
        text.value='';
        divClass.appendChild(pnrClass);
    var shijian = document.createElement('p');
        shijian.setAttribute('class','shijian');
        divClass.appendChild(shijian);
        shijian.innerHTML = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();
}
var dianzan=document.getElementsByClassName('imgZan')[0];
var jishu3=1; //点赞计数
var zanShu = document.getElementsByClassName('zanShu')[0];
    dianzan.onclick = function(){
        zanShu.innerHTML= jishu3++;
    }
