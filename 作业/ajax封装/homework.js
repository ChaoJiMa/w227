/**
 * Created by doubleyong on 2020/9/3.
 */
//param ： 只支持字符串
// 如何可以省略某个参数，要把这个参数放到最后


var $ = (function(){
    function createXHR(){
    var xhr ;
    if(Window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("microsoft.XMLHTTP");
    }
    return xhr;
}
function ObjectTOString(obj){
    var arr = [];
    for(var key in obj){
        arr.push(key+"="+obj[key]);
    }
    return arr.join('&');
}
function myAjax(obj)
{
   var xhr =createXHR();
    obj.type = obj.type.toLowerCase() || 'get';
    if(obj.type == "get" && obj.data){
        //jquery ajax方法-> data 支持两种形式，字符串，对象
        if(typeof obj.data =="object"){
           //将对象转成字符串 {id:5,name:'abc'}  =>  "id=5&name='abc'"
            obj.data = ObjectTOString(obj.data);
        }

        obj.url = obj.url +"?"+obj.data;

    }
    // ==
    if(!obj.sync.toString()){
        obj.sync = true;
    }
    xhr.open(obj.type,obj.url,obj.sync);

    xhr.onreadystatechange=function () {
        if(xhr.readyState == 4 ){
            if(xhr.status>=200&&xhr.xhe.status<300){
                obj.success(xhr.responseText);
            }else{
                obj.fail(xhr.error);
            }
            
        }
    }
    if(obj.type=="post"){
        xhr.setRequestHeader("Content-type","application-x-www-form-urlencoded");
        xhr.send(obj.data);
    }else{
        xhr.send(null);
    }
}

// jquery get ,post ,ajax
function get(url,data,success,dataType) {
    if(dataType=="json"){
        var newSuccess = function (data) {
            success(JSON.parse(data))
        };
    }
    var obj = {
        type:"get",
        url:url,
        data:data,
        success:newSuccess
    }
    myAjax(obj);
}
function post() {

}
    return {ajax:myAjax,get:get,post:post}
})();


// 高内聚，低耦合
get();
myAjax({
    url:"/login",
    type:"get",
    data:{id:5,name:'abc'},
    success:function () {

    },
    fail:function () {

    }

})
