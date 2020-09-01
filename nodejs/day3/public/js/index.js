
var shuju = [];//存放学生信息
var perSize = 2;//每页显示条数
var dangqian = 1;//当前显示的页数
var totalPage = -1;//总共的页数
/**
 * 当页面dom加载完成之后执行
 */
$(function () {
  getStudentList();
  fenye()
  shanchu();
  tianjia();
  fenyeDj();
  xiugai();
});
//从服务器获取数据
function getStudentList(){
  //1.创建xhr对象
  var xhr;
  if(XMLHttpRequest){
    xhr = new XMLHttpRequest;
  }else{
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  //2.open设置请求
  xhr.open('get','/studentList?cur='+dangqian+'&perSize='+perSize)
  //3.设置事件，接受响应的数据
  xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    // console.log(xhr.status);                //http请求的状态码
    if(xhr.readyState == 4 && xhr.status == 200 ){
      //xhr.responseText  获取响应回来的数据 字符串类型
      // console.log(xhr.responseText);
      var result = JSON.parse(xhr.responseText);
      if(result.code == 200 ){
        shuju = result.data;
        zhanshi();
      }else{
        alert(result.massage)
      }
      
    }
  }
  //4.send发起请求
  xhr.send(null);
}


/**
 * 清空内容
 */
function qingkong() {
  $("#tbody").html("");
}
/**
 * 展示页面数据
 */
function zhanshi() {
    qingkong()
    
    for(var i=0;i<shuju.length;i++){
      $("#tbody").append(`
            <tr>
                <th><input type="checkbox"></th>
                <th>${shuju[i].id}</th>
                <th>${shuju[i].name}</th>
                <th>${shuju[i].age}</th>
                <th>${shuju[i].banji}</th>
                <th>${shuju[i].dhua}</th>
                <th>
                    <i class='glyphicon glyphicon-trash  sc' data-sc="${i}"></i>
                    <i class='glyphicon glyphicon-pencil  xg' data-xg="${i}" data-toggle="modal" data-target=".bs-example-modal-sm" ></i>
                </th>
            </tr>`);
    }
}
/**
 * 删除
 */
function shanchu(){
    $('#tbody').on('click','.sc',function(){
        var id=$(this).attr('data-sc')
        // console.log(id);
        //ajax
        var xhr;
        if(XMLHttpRequest){
          xhr = new XMLHttpRequest;
        }else{
          xhr = new ActiveXObject('microsoft.XMLHTTP');
        }
        //2.open
        xhr.open('get','/student/del?id='+id)
        //3.
        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.responseText);
            let obj = JSON.parse(xhr.responseText)
            if(obj.code == 200 && obj.message == '删除成功'){
              alert('删除成功');
              getStudentList();
            }else{
              alert(obj.message)
            }
          }
        }
        //4.
        xhr.send(null)

        
    })
}
/**
 *添加
 */
function tianjia(){
    $('#tiji').on('click',function(){
      var xm=$('#xm').val()
      var age=$('#age').val()
      var bj=$('#bj').val()
      var dh=$('#dh').val()
      var obj={'name':xm,'age':age,'banji':bj,'dhua':dh,}
      shuju.push(obj)
      qingkong()
      zhanshi();
      fenye()
      $('#myModal').modal('hide')
      $('#xm').val('')
      $('#age').val('')
      $('#bj').val('')
      $('#dh').val('')
    })
}
/**
 * 生成页码
 */
function fenye(){
  myAjax('get','/total','',function(data){
    console.log(data);
    let obj = JSON.parse(data)
     totalPage=Math.ceil(obj.num/perSize); //总页数=shuju总长度/每页的个数 向上取整
    $('#divPage').html('')
    for(i=1;i<=totalPage;i++){
      if(dangqian==i){
        $('#tbody').append(`<button class="btn btn-primary">${i}</button>`)
      }else{
        $('#tbody').append(`<button class="btn">${i}</button>`)
      }
    }
  })
 
}
/**
 * 给页码添加事件
 */
function fenyeDj(){
  $('#tbody').on('click','button',function(){
    dangqian = Number($(this).text());//获取button的值
    getStudentList()
    fenye()
  })
}
/**
 * 修改
 */
function xiugai(){
  $('#tbody').on('click','.xg',function(){
    var id = $(this).attr('data-xg');
    $('#xgxm').val(shuju[id].name)
    $('#xgage').val(shuju[id].age)
    $('#xgbj').val(shuju[id].banji)
    $('#xgdh').val(shuju[id].dhua)
    $('#tj').click(function(){
    var name=$('#xgxm').val()
    var age=$('#xgage').val()
    var bj=$('#xgbj').val()
    var dh=$('#xgdh').val()
    var obj2 = {
      'name':name,
      'age':age,
      'banji':bj,
      'dhua':dh,
    }
    shuju[id]=obj2;
    $('#mot').modal('hide');
    zhanshi()
    fenye()
  })
  })
  
}
