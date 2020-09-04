(function(){
  zz();
  gb();
  dom();
  zuo();
  you();
})();
//点击弹出遮罩显示点击图片
function zz(){
  $('#dx').on('click','figure',function(){
    var a = ($(this).find('img'))[0].currentSrc;
    $('#zz').css({'display':'block'})
    $('#zz img')[0].src=a;
  })
}
//点击关闭遮罩层
function gb(){
  $('.gb').click(function(){
    $('#zz').css({'display':'none'})
  })
}
//获取元素
function dom(){
  let dxImg = $('#dx img');
  let zzImg = $('#zz img');
  let dxImglength = dxImg.length;
  return{
    dxImg:dxImg,
    zzImg:zzImg,
    dxImglength:dxImglength
  }
}
//点击左边
function zuo(){
  $('.zuo').click(function(){
    for(var i=0;i<dom().dxImglength;i++){
      if(dom().zzImg[0].currentSrc == dom().dxImg[i].currentSrc){
        if((i-1)>=0){
           dom().zzImg[0].src = dom().dxImg[i-1].currentSrc
        }else{
          dom().zzImg[0].src = dom().dxImg[dom().dxImglength-1].currentSrc
        }
      }
    }
  })
}
// 点击右边
function you(){
  $('.you').click(function(){
    for(var i=0;i<dom().dxImglength;i++){
      if(dom().zzImg[0].src == dom().dxImg[i].currentSrc){
        if((i+1)>=dom().dxImglength){
          dom().zzImg[0].src = dom().dxImg[0].currentSrc
        }else{
          dom().zzImg[0].src = dom().dxImg[i+1].currentSrc
        }
        break;
      }
    }
  }) 
}
/**
 * var dxImg = $('#dx img');
  var zzImg = $('#zz img');
  var dxImglength = dxImg.length;
 * $('#dx').on('click','figure',function(){
  var a = ($(this).find('img'))[0].currentSrc;
  $('#zz').css({'display':'block'})
  $('#zz img')[0].src=a;
})
$('.gb').click(function(){
  $('#zz').css({'display':'none'})
})
$('.zuo').click(function(){
  for(var i=0;i<dxImglength;i++){
    if(zzImg[0].currentSrc == dxImg[i].currentSrc){
      if((i-1)>=0){
         zzImg[0].src = dxImg[i-1].currentSrc
      }else{
        zzImg[0].src = dxImg[dxImglength-1].currentSrc
      }
     
    }
  }
})
$('.you').click(function(){
  for(var i=0;i<dxImglength;i++){
    if(zzImg[0].currentSrc == dxImg[i].currentSrc){
      if((i+1)<dxImglength){
        zzImg[0].src = dxImg[i+1].currentSrc
      }else{
        zzImg[0].src = dxImg[0].currentSrc
      }
    }
  }
}) 
*/
