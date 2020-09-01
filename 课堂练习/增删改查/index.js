var shuju = [
  {
    name: "hou",
    age: 18,
    banji: 1,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 2,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 3,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 4,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 5,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 6,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 7,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 8,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 9,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 10,
    dhua: 18244463261,
  },
  {
    name: "hou",
    age: 18,
    banji: 11,
    dhua: 18244463261,
  },
];
/**
 * 当页面dom加载完成之后执行
 */
$(function () {
  zhanshi();
  shanchu();
  tianjia();
  fenye();
  fenyeDj();
  xiugai();
});
/**
 * 
 */
var perSize = 5;//每页显示条数
var dangqian = 1;//当前显示的页数
var totalPage = -1;//总共的页数
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
    var start = (dangqian-1)*perSize;
    var end = start+perSize;
    for(var i=start;i<end&&i<shuju.length;i++){
      $("#tbody").append(`
            <tr>
                <th><input type="checkbox"></th>
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
        var shanc=$(this).attr('data-sc')
        shuju.splice(shanc,1);  
        zhanshi()
        fenye()
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
  totalPage=Math.ceil(shuju.length/5); //总页数=shuju总长度/每页的个数 向上取整
  $('#divPage').html('')
  for(i=1;i<=totalPage;i++){
    if(dangqian==i){
      $('#tbody').append(`<button class="btn btn-primary">${i}</button>`)
    }else{
      $('#tbody').append(`<button class="btn">${i}</button>`)
    }
  }
}
/**
 * 给页码添加事件
 */
function fenyeDj(){
  $('#tbody').on('click','button',function(){
    dangqian = Number($(this).text());//获取button的值
    zhanshi();
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
