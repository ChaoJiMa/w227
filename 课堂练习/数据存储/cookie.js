/**
 * Created by Administrator on 2020/8/4.
 */
function setCookie(name,value,iDay){
    if(iDay){
        document.cookie = name +"="+value+";path=/;expires="+iDay;
    }else{
        document.cookie = name +"="+value+";path=/";
    }
}
function getCookie(name){
    var str = document.cookie;
    var vals = str.split(';');//['a=1','b=2']
    for(var i=0;i<vals.length;i++){
        var tempName = vals[i].split('=');
        if(tempName[0].trim() == name){
            return tempName[1];
        }
    }
}
function removeCookie(name){
    setCookie(name,'',-2)
}