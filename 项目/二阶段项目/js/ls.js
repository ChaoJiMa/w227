var qjIndex = 0;

// 获取学生
var student = JSON.parse(localStorage.student);

// 获取老师
var teacher = JSON.parse(localStorage.teacher);

// 获取登录的用户名
var yonghu=JSON.parse(localStorage.yonghu);

var yhIndex=0;
$.each(teacher,function(i,v){
    if(teacher[i].yhm==yonghu){
        yhIndex=i;
    }
});

/* 
    ==================================分页=====================================
*/

// 同一班级的人员
var onlybj = [];
var pageData = [];
for (var i = 0; i < student.length; i++) {
    if (student[i].bj == teacher[yhIndex].bj) {
        onlybj.push(student[i]);
    }
}

// 将数据表的信息添加到表格中的函数
// bji：班级序号
function render(datas) {
    var trData = '';
    for (var i = 0; i < datas.length; i++) {
        trData += '<tr>' +
            '<td>' + datas[i].bj + '</td>' +
            '<td>' + datas[i].number + '</td>' +
            '<td>' + datas[i].name + '</td>' +
            '<td>' + datas[i].age + '</td>' +
            '<td>' + datas[i].sex + '</td>' +
            '<td>' + datas[i].zhuanye + '</td>' +
            '<td>' + datas[i].cheng + '</td>' +
            '<td>' + datas[i].city + '</td>' +
            '<td>' +
            '<button class="xiugai" data-index=' + i + '>修改</button>' +
            '<button class="delete" data-index=' + i + '>删除</button>' +
            '</td>' +
            '</tr>';

    }
    // 每次刷新数据后都要先清空表格
    $("#xinxibiao").html("");
    $('#xinxibiao').append(trData);
}

function getPageData(arr, index, numPerPage) {
    pageData = arr.slice((index - 1) * numPerPage, index * numPerPage);
    return pageData;

}

// 给每页添加一个按钮
function getPage(total, numPerPage) {
    var pageNum = Math.ceil(total / numPerPage);
    var lis = '';
    for (let i = 1; i <= pageNum; i++) {
        if (i == 1) {
            lis += '<li class="active danye">' + i + '</li>'
        } else {
            lis += '<li class="danye">' + i + '</li>'
        }
    }
    // 删除 上一页 后面的所有 li
    $('#previousYe').nextAll('li').remove();
    $('#previousYe').after(lis);
}

function initTable() { //进入页面的初始状态，初始化表格
    // 5个数据一页
    pageData = getPageData(onlybj, 1, 5);
    // 添加数据
    render(pageData);
    // 分页按钮
    getPage(onlybj.length, 5);
    xiugai();
    shanchu();

}

initTable();

// =================================点击按钮===========================
// 点击按钮，转到那一页
$('#pageBox').on('click', 'li', function() {
    $('#xinxibiao>tr').empty();
    pageData = getPageData(onlybj, Number($(this).html()), 5);
    render(pageData);
    $(this).addClass('active').siblings('li').removeClass('active');
    xiugai();
    shanchu();
    console.log($('.active').index());

});

// ==============================下一页=================================
$('#pageBox').on('click', '#nextYe', function() {
    // 把表格清空，再重新插入
    $('#xinxibiao>tr').empty();

    $('#pageBox>.active').next('li').addClass('active').siblings('li').removeClass('active');
    pageData = getPageData(onlybj, Number($('#pageBox>.active').html()), 5);
    render(pageData);
    xiugai();
    shanchu();

});

// ===================================上一页============================
$('#pageBox').on('click', '#previousYe', function() {
    // 把表格清空，再重新插入
    $('#xinxibiao>tr').empty();

    $('#pageBox>.active').prev('li').addClass('active').siblings('li').removeClass('active');
    pageData = getPageData(onlybj, Number($('#pageBox>.active').html()), 5);
    render(pageData);
    xiugai();
    shanchu();

});

// ===============================跳转页面======================================
$('#jump').click(function() {
    // 获取页数按钮的个数
    var liNum = $('#pageBox').children('li');
    var tzNum = $('#pageNum').val();

    // 根据已有的页数来判断输入的页数是否存在
    if (tzNum <= liNum.length && tzNum > 0) {

        $('#pageBox').children('li').eq(tzNum - 1).addClass('active').siblings('li').removeClass('active');
        pageData = getPageData(onlybj, Number($('#pageBox>.active').html()), 5);
        render(pageData);
        xiugai();
        shanchu();
    } else {
        alert('该页数不存在！');
    }
});

// ================================== 查询 ====================================
$('#queryName').keydown(function() {
    initTable();
})

$('#query').click(function() {
    cx();
});

// 查询下拉框的值，再调用相应的函数
function cx() {
    var querySelVal = '';

    // 获取查询的下拉框的值
    querySelVal = $('#querySel option:selected').val();

    if (querySelVal == 'name') {
        queryName();
    }
    if (querySelVal == 'number') {
        queryNumber();
    }
    if (querySelVal == 'age') {
        queryAge();
    }
    if (querySelVal == 'sex') {
        querySex();
    }
    if (querySelVal == 'zhuanye') {
        queryZy();
    }
    if (querySelVal == 'cheng') {
        queryCj();
    }
    if (querySelVal == 'city') {
        queryCity();
    }
}

// 找编号
function queryNumber() {
    var quArr = [];
    var quName = $('#queryName').val();

    $.each(onlybj, function(i, v) {
            var czName = String(onlybj[i].number);
            if (czName.indexOf(quName) > -1) {
                // 找到这一行，再将它加入一个新的数组
                quArr.push(onlybj[i]);
            }
        })
        // console.log(quArr);
    pageData = getPageData(quArr, 1, 5);
    render(pageData);
    getPage(quArr.length, 5);

    xiugai();
    shanchu();
}
// 找名字
function queryName() {
    var quArr = [];
    var quName = $('#queryName').val();

    $.each(onlybj, function(i, v) {
            var czName = onlybj[i].name;
            // console.log(typeof onlybj[i].name);
            if (czName.indexOf(quName) > -1) {
                // 找到这一行，再将它加入一个新的数组
                quArr.push(onlybj[i]);
            }
        })
        // console.log(quArr);
    pageData = getPageData(quArr, 1, 5);
    render(pageData);
    getPage(quArr.length, 5);

    xiugai();
    shanchu();
}
// 找年龄
function queryAge() {
    var quArr = [];
    var quName = $('#queryName').val();

    $.each(onlybj, function(i, v) {
        var czName = String(onlybj[i].age);
        console.log(typeof onlybj[i].age)
        if (czName.indexOf(quName) > -1) {
            // 找到这一行，再将它加入一个新的数组
            quArr.push(onlybj[i]);
        }
    })
    console.log(quArr);
    pageData = getPageData(quArr, 1, 5);
    render(pageData);
    getPage(quArr.length, 5);

    xiugai();
    shanchu();
}
// 找性别
function querySex() {
    var quArr = [];
    var quName = $('#queryName').val();

    $.each(onlybj, function(i, v) {
        var czName = onlybj[i].sex;
        console.log(typeof onlybj[i].sex)
        if (czName.indexOf(quName) > -1) {
            // 找到这一行，再将它加入一个新的数组
            quArr.push(onlybj[i]);
        }
    })
    console.log(quArr);
    pageData = getPageData(quArr, 1, 5);
    render(pageData);
    getPage(quArr.length, 5);

    xiugai();
    shanchu();
}
// 找专业
function queryZy() {
    var quArr = [];
    var quName = $('#queryName').val();

    $.each(onlybj, function(i, v) {
        var czName = onlybj[i].zhuanye;
        console.log(typeof onlybj[i].zhuanye)
        if (czName.indexOf(quName) > -1) {
            // 找到这一行，再将它加入一个新的数组
            quArr.push(onlybj[i]);
        }
    })
    console.log(quArr);
    pageData = getPageData(quArr, 1, 5);
    render(pageData);
    getPage(quArr.length, 5);

    xiugai();
    shanchu();
}
// 找成绩
function queryCj() {
    var quArr = [];
    var quName = $('#queryName').val();

    $.each(onlybj, function(i, v) {
        var czName = String(onlybj[i].cheng);
        console.log(typeof onlybj[i].cheng)
        if (czName.indexOf(quName) > -1) {
            // 找到这一行，再将它加入一个新的数组
            quArr.push(onlybj[i]);
        }
    })
    console.log(quArr);
    pageData = getPageData(quArr, 1, 5);
    render(pageData);
    getPage(quArr.length, 5);

    xiugai();
    shanchu();
}
// 找城市
function queryCity() {
    var quArr = [];
    var quName = $('#queryName').val();

    $.each(onlybj, function(i, v) {
        var czName = onlybj[i].city;
        console.log(typeof onlybj[i].city)
        if (czName.indexOf(quName) > -1) {
            // 找到这一行，再将它加入一个新的数组
            quArr.push(onlybj[i]);
        }
    })
    console.log(quArr);
    pageData = getPageData(quArr, 1, 5);
    render(pageData);
    getPage(quArr.length, 5);

    xiugai();
    shanchu();
}


/*  =====================================      =======================================
    ===================================== 添加 =======================================
    =====================================      =======================================

*/
$('#add').click(function() {

    $('#huiseKuang').show();
    // 每次输入都清空上次 input 的内容
    $('#addNR').find('input').val('');
    // 让学号自动+1
    var lastNum = String(onlybj.length + 1);
    var xh='';
    if(lastNum.length<2){
        xh='1'+teacher[yhIndex].bj+'00'+String(lastNum);
    }else if(lastNum.length==2){
        xh='1'+teacher[yhIndex].bj+'0'+String(lastNum);
    }
    $('#addnumber').val(xh);

    // 班级固定
    $.each($('select[id=addbanJi]').find('option'), function(i, v) {
        if (teacher[yhIndex].bj == Number($('select[id=addbanJi]').find('option').eq(i).text())) {
            $('select[id=addbanJi] option').eq(i).prop('selected', true);
        }
    });
    
    // console.log(typeof lastNum);
    // console.log(typeof onlybj[onlybj.length - 1].number);


})

//===================== 点击完成，就传数据 ========================
$('#addsuccess').click(function() {
    $('#huiseKuang').hide();

    var name = $('#addname').val(),
        age = Number($('#addage').val()),
        number = $('#addnumber').val(),
        sex = $('#addsex option:selected').text(),
        major = $('#addmajor option:selected').text(),
        banJi = Number($('#addbanJi option:selected').text()),
        grade = Number($('#addgrade').val()),
        city = $('#addcity option:selected').text();

    student[student.length] = {
        name: name,
        age: age,
        number: number,
        sex: sex,
        zhuanye: major,
        bj: banJi,
        cheng: grade,
        city: city
    };

    $('#xinxibiao').append('<tr>' +
        '<td>' + student[student.length - 1].bj + '</td>' +
        '<td>' + student[student.length - 1].number + '</td>' +
        '<td>' + student[student.length - 1].name + '</td>' +
        '<td>' + student[student.length - 1].age + '</td>' +
        '<td>' + student[student.length - 1].sex + '</td>' +
        '<td>' + student[student.length - 1].zhuanye + '</td>' +
        '<td>' + student[student.length - 1].cheng + '</td>' +
        '<td>' + student[student.length - 1].city + '</td>' +
        '<td>' +
        '<button class="xiugai" data-index=' + ($('.delete').last().data('index') + 1) + '>修改</button>' +
        '<button class="delete" data-index=' + ($('.delete').last().data('index') + 1) + '>删除</button>' +
        '</th>' +
        '</tr>');

    // console.log(student);
    // console.log(student.length);

    // 删除数据
    localStorage.removeItem('student');
    // 添加删除后的数据
    localStorage.setItem('student', JSON.stringify(student));

    // initTable();
    onlybj = [];
    student = JSON.parse(localStorage.student);
    for (let i = 0; i < student.length; i++) {
        if (student[i].bj == teacher[yhIndex].bj) {
            onlybj.push(student[i]);
        }
    }
    // 重新分页
    //console.log(onlybj)
    pageData = getPageData(onlybj, 1, 5);
    render(pageData);
    // 分页按钮
    getPage(onlybj.length, 5);

});

//============================ 点击取消 ===========================
$('#cancel').click(function() {
    $('#huiseKuang').hide();
});

//================================================================= 修改功能 ============================================================
function xiugai() {
    $('.xiugai').off();
    $('.xiugai').click(function() {
        $('#xiugaikuang').show();

        // 找对应的学号
        var zhi = $(this).parent().siblings().eq(1).html()

        // var index = 0;
        for (var i = 0; i < student.length; i++) {
            if (student[i].number == zhi) {
                // 在数组 student 里的下标
                qjIndex = i;
            }
        }
        // console.log(qjIndex)


        $('input[id=xgname]').val(student[qjIndex].name);
        $('input[id=age]').val(student[qjIndex].age);
        $('input[id=number]').val(student[qjIndex].number);
        $('input[id=number]').attr('readonly', true);
        $('input[id=grade]').val(student[qjIndex].cheng);
        // 将这个人的性别在下拉框中显示为默认值
        // 遍历这个下拉框所有的option的值，当找到和这个人的性别一样的option，就设置为选中状态
        $.each($('select[id=sex]').find('option'), function(i, v) {
            if (student[qjIndex].sex == $('select[id=sex]').find('option').eq(i).text()) {
                $('select[id=sex] option').eq(i).prop('selected', true);
            }
        });
        // 班级
        $.each($('select[id=banJi]').find('option'), function(i, v) {
            if (student[qjIndex].bj == $('select[id=banJi]').find('option').eq(i).text()) {
                $('select[id=banJi] option').eq(i).prop('selected', true);
            }
        });
        // 专业
        $.each($('select[id=major]').find('option'), function(i, v) {
            if (student[qjIndex].zhuanye == $('select[id=major]').find('option').eq(i).text()) {
                $('select[id=major] option').eq(i).prop('selected', true);
            }
        });
        // 城市
        $.each($('select[id=city]').find('option'), function(i, v) {
            if (student[qjIndex].city == $('select[id=city]').find('option').eq(i).text()) {
                $('select[id=city] option').eq(i).prop('selected', true);
            }
        });
    });
}
xiugai();


//===================== 点击完成，就传数据 ========================
$('#xgsuccess').click(function() {
    $('#xiugaikuang').hide();

    var name = $('#xgname').val(),
        age = Number($('#age').val()),
        number = $('#number').val(),
        sex = $('#sex option:selected').text(),
        major = $('#major option:selected').text(),
        banJi = Number($('#banJi option:selected').text()),
        grade = Number($('#grade').val()),
        city = $('#city option:selected').text();

console.log(name);
console.log(number);

    student[qjIndex] = {
        name: name,
        age: age,
        number: number,
        sex: sex,
        zhuanye: major,
        bj: banJi,
        cheng: grade,
        city: city
    };

    // 将修改后的值覆盖原表格的值
    // th 通过 html() 赋值
    $('#xinxibiao').find('tr').eq(qjIndex).find('td').eq(0).html(student[qjIndex].banJi);
    $('#xinxibiao').find('tr').eq(qjIndex).find('td').eq(1).html(student[qjIndex].number);
    $('#xinxibiao').find('tr').eq(qjIndex).find('td').eq(2).html(student[qjIndex].name);
    $('#xinxibiao').find('tr').eq(qjIndex).find('td').eq(3).html(student[qjIndex].age);
    $('#xinxibiao').find('tr').eq(qjIndex).find('td').eq(4).html(student[qjIndex].sex);
    $('#xinxibiao').find('tr').eq(qjIndex).find('td').eq(5).html(student[qjIndex].zhuanye);
    $('#xinxibiao').find('tr').eq(qjIndex).find('td').eq(6).html(student[qjIndex].cheng);
    $('#xinxibiao').find('tr').eq(qjIndex).find('td').eq(7).html(student[qjIndex].city);

    // console.log(student);
    // console.log(student.length);

    // 删除数据
    localStorage.removeItem('student');
    // 添加删除后的数据
    localStorage.setItem('student', JSON.stringify(student));

    onlybj = [];
    student = JSON.parse(localStorage.student);
    for (let i = 0; i < student.length; i++) {
        if (student[i].bj == teacher[yhIndex].bj) {
            onlybj.push(student[i]);
        }
    }
    // 重新分页
    //console.log(onlybj)
    pageData = getPageData(onlybj, 1, 5);
    render(pageData);
    // 分页按钮
    getPage(onlybj.length, 5);

    cx();
});

//============================ 点击取消 ===========================
$('#xgcancel').click(function() {
    $('#xiugaikuang').hide();
    cx();

});


//=========================================================== 删除功能 ===========================================================
// 用事件委托来删除
function shanchu() {
    $('#xinxibiao').off()

    $('#xinxibiao').on('click', '.delete', function() {
        // 删除单元格
        var index = $(this).data('index');
        // 删除对应的 tr
        $(this).parent().parent().remove();

        // 找对应的学号
        var zhi = $(this).parent().siblings().eq(1).html()


        for (var i = 0; i < student.length; i++) {
            if (student[i].number == zhi) {
                student.splice(i, 1);
                break;
            }
        }

        // 删除数据
        localStorage.removeItem('student');
        // 添加删除后的数据
        localStorage.setItem('student', JSON.stringify(student));
        // 添加修改后的数据
        onlybj = [];
        student = JSON.parse(localStorage.student);
        for (let i = 0; i < student.length; i++) {
            if (student[i].bj == teacher[yhIndex].bj) {
                onlybj.push(student[i]);
            }
        }
        // 重新分页
        pageData = getPageData(onlybj, 1, 5);
        render(pageData);
        // 分页按钮
        getPage(onlybj.length, 5);

        cx();

    });
}
