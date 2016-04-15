/*
*	数据存储
*/
var data = [];
var input = document.getElementById("inputNum");
/*
*	读取数据
*/
function getInput(){
	var input_value = input.value;
	return input_value;
}
// 空白（空格、换行、tab）和逗号分隔的字符串，变成用逗号分隔  
function getSplitString(str) {  
    var arr = str.split("，");  
    var resources =[];
    for (var i = 0; i < arr.length; i++) {  
        var arr1 = arr[i].split(/\s+/); 
        for (var j = 0; j < arr1.length; j++) { 
              var arr2 = arr1[j].split("、");
              for (var k = 0; k < arr2.length; k++) {
              	var arr3=arr2[k].split(",");
              	for (var m = 0; m < arr3.length; m++) {
              	if (arr3[m].trim() != ""){
              		resources=resources.concat(arr3[m]);  
              	}
              	}
               }                   
            } 
        }  
    return resources;  
}  


/*
*	左侧入
*/
function addLeft(){
	var inputValue=getInput();
    var arr4=getSplitString(inputValue);
    for (var i = 0; i < arr4.length; i++) {
    		data.unshift(arr4[i]);
    }


	//渲染图表
	renderChart();
}
/*
*	右侧入
*/
function addRight(){
	var inputValue=getInput();
    var arr4=getSplitString(inputValue);
    for (var i = 0; i < arr4.length; i++) {
    		data.push(arr4[i]);
    }

	//渲染图表
	renderChart();
}

/*
*	左侧出
*/
function delLeft(){
	if(data.length === 0){
		alert("数组为空！")
		return false;
	};
	//删除
	alert("删除‘"+data.shift()+"’！");

	//渲染图表
	renderChart();
}

/*
*	右侧出
*/
function delRight(){
	if(data.length === 0){
		alert("数组为空！")
		return false;
	};
	//删除
	alert("删除‘"+data.pop()+"’！");

	//渲染图表
	renderChart();
}
/*
*	点击删除
*/
function delClick(index){
	//删除
	data.splice(index,1);

	//渲染图表
	renderChart();
}
function searchWord(){
	var searchText=document.getElementById("search");
	var keyword=searchText.value;
	var pat=new RegExp(keyword); 
	for (var i = 0; i < data.length; i++) {
		if (pat.test(data[i])) {
			 var temp =data[i];
			 data[i]=data[i].replace(data[i], "<font color='blue'>"+temp+"</font>");
		}		   
	}
	renderChart();
}
/*
*	渲染图表
*/
function renderChart(str){
	var api_chart = document.getElementById("api-chart");
	  //设定宽度
	api_chart.style.height = "20px";
	api_chart.style.lineHeight = "20px";
	api_chart.innerHTML = "";
	var bgColor = "red";
	for(var i = 0 ; i < data.length ; i++){
		api_chart.innerHTML += "<span onclick=delClick("+i+") style='display:inline-block;margin-left:1px;width:50px;height:20px;background-color:"+bgColor+";cursor:pointer;'>"+data[i]+"</span>";
	}
	//将焦点赋给输入框
	// input.focus();
}



/*
*	绑定按键事件
*/
function initBtnEvent(){
	var add_left = document.getElementById("addleft");
	var add_right = document.getElementById("addright");
	var del_left = document.getElementById("delleft");
	var del_right = document.getElementById("delright");
	var sea_word  = document.getElementById("searchbt");

	add_left.onclick = function(){addLeft();};
	add_right.onclick = function(){addRight();};
	del_left.onclick = function(){delLeft();};
	del_right.onclick = function(){delRight();};
	sea_word.onclick=function(){searchWord();};
}


/*
*	初始化
*/
function init(){
	initBtnEvent();
	renderChart();
}
init();