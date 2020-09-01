/**
 * Created by Administrator on 2020/7/27.
 */
function EventAction(){
    this.addEvent = function (dom,eventType,fun){
        if(document.addEventListener){//判断有没有这个方法
            dom.addEventListener(eventType, fun, false);
        }else if(document.attachEvent){
            dom.attachEvent('on'+eventType,fun);
        }else{
            dom['on'+eventType] = fun;
        }
    };
    this.remove = function (dom,eventType,fun){
        if(document.removeEventListener){//判断有没有这个方法
            dom.removeEventListener(eventType, fun, false);
        }else if(document.detachEvent){
            dom.detachEvent('on'+eventType,fun);
        }else{
            dom['on'+eventType] = null;
        }
    }
    this.getTarget = function(e){
        return e.target || e.srcElement;
    }
    this.getEvent = function(e){
        return window.event || e;
    }

}