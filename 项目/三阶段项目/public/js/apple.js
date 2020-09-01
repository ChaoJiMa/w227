$(document).ready(function(){
  var p=0,
      t=0;
$(window).scroll(function(){
  p=$(this).scrollTop();
    console.log(p);
    switch(p) {
      case 0:
      $('.divsection1').css({'opacity':'1'})
      $('.divsection').css({'transform': 'scale(5,5)','background-image': 'url(./images/1.png)'})
      $('.divios').css({'position': 'absolute','top': '70px','backdropFilter': 'none'})
      $('.box1').css({'borderBottom': 'rgb(128,128, 128) 1px solid'})
      break;
      case 100:
      $('.divios').css({'backdropFilter': 'blur(80px)'})
      $('.box1').css({'border': 'none'})
      break;
      case 200:
      $('.divios').css({'position':'fixed','top':'0px'})
      $('.divsection1').css({'opacity':'0.5'})
      $('.divsection').css({'transform': 'scale(5,5)','background-image': 'url(./images/1.png)'})
      // $('.divsection').css({'transition':'all 1s'})
      //$('#box').animate({}) jq自带css过渡 动画不突兀
      break;
      case 300:
      $('.divsection1').css({'opacity':'0'})
      $('.divsection').css({'transform': 'scale(4,4)','background-image': 'url(./images/1.png)'})
      break;
      case 400:
      $('.divsection').css({'transform': 'scale(3,3)','background-image': 'url(./images/1.png)'})
      break;
      case 500:
      $('.divsection').css({'transform': 'scale(3,3)','background-image': 'url(./images/2.png)'});
      break;
      case 600:
      $('.divsection').css({'transform': 'scale(2,2)'})
      break;
      case 700:
      $('.divsection').css({'transform': 'scale(1,1)'})
      break;
    }
setTimeout(function(){ t = p ; },0)
    })
  $('#denglu').click(function(){
    $('.ol').toggle()
  })
  $('.deng').click(function(){
    location.href='login.html'
  })
  var id = ((window.location.search).split(':'))[1] //获取当前登录id
  console.log(id);
  $.ajax({
    type:'get',
    url:'/id',
    data:{
      'id':id
    },
    success:function(data){
      console.log(data);
      if(data.code == 200){
        $('.deng').html(data.data[0].name)
        $('.denglu').html(data.data[0].name)
      }
    }
  })
})

