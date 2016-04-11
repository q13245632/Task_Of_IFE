/**
 * 存储数组
 */
var data=[];
var inputnum=document.getElementById("num");
/**
 * 获得输入数值并进行检验
 */
function checkValue(){
  var in_value=inputnum.value;
  if (isNaN(in_value)) {
    alert("请输入合法的数字！");
  } else {
    return in_value;
  }
  if (data.length>60) {
    alert("超出数组范围，请重新输入！");
    return false;
  }
  if (in_value<10 || in_value>100){
    alert("输入数值超出允许的范围，请重新输入！");
    return false;
  } 
  return in_value;
}
//左侧添加
function leftAdd(){  
   var addValue=checkValue();
   data.unshift(addValue);
   render();
}
//右侧添加
function rightAdd(){
   var addValue=checkValue();
   data.push(addValue);
   render();
}
//左侧删除
function leftDel(){
   if (data.length>0) {
    alert("删除元素："+data.shift())
   }else{
    alert("数组为空，无法删除")；
   }  
   render();
}
//右侧删除
function rightDel(){
   if (data.length>0) {
    alert("删除元素："+data.pop())
   }else{
    alert("数组为空，无法删除")；
   }  
   render();
}
//点击删除
function clickDel(this){
   data.splice(this,1);
   render();
}
//渲染表格
function render(){
   var out_put=document.getElementById("output");
   var len=data.length;
   var renderWidth=function(){
     if (len<10) {
    return "20px";
   } else if (len<30){
    return "15px";
   } else {
    return "10px";
   }
   };
   out_put.style.width = "628px";
   out_put.style.height = "300px";
   out_put.style.lineHeight = "600px";
   out_put.innerHTML ="";
   for (var i = 0; i < len; i++) {
        out_put.innerHTML += "<span onclick=clickDel("+i+") style='display:inline-block;margin-left:1px;width:" 
                              + renderWidth + ";height:" 
                              + data[i]*3 + "px;background-color:red;'>"+"</span>";
   }
 }
//排序
var flag = 0;
function sortData() {
  var i = data.length -1
  var t;
  sortData.moveOne = function(){
      render();
    var temp = data[i] ;
      var index = i ;
      for(var j = 0 ; j < i ; j++){
        if(flag === 0 && data[j] > temp ){
          temp = data[j] ;
          index = j ;
        }else if(flag === 1 && data[j] < temp ){
          temp = data[j] ;
          index = j ;
        }
      }
      document.getElementById("output").childNodes[index].style.backgroundColor = "red";
      data.splice(index,1);
      data.push(temp);
      i--;
      if(i<0) {
        clearInterval(t);
        render();
        if(flag === 0){
          flag = 1;
        }else if(flag === 1){
          flag = 0;
        }
      }
   }

  t = setInterval("sortData.moveOne()",50);
}
//初始化
function init(){
  var insert_left = document.getElementById("leftadd");
  var insert_right = document.getElementById("rightadd");
  var delete_left = document.getElementById("leftdel");
  var delete_right = document.getElementById("rightdel");
  var sort_aqi_data = document.getElementById("sortdata");

  insert_left.onclick = function(){leftAdd();};
  insert_right.onclick = function(){rightAdd();};
  delete_left.onclick = function(){leftDel();};
  delete_right.onclick = function(){rightAdd();};
  sort_aqi_data.onclick = function(){sortData();};

  render();
}

init();