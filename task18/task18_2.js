/*
*	数据存储
*/
var data = [];
var input = document.getElementById("input_num");
/*
*	读取数据,并验证
*/

function getInput(){

	var input_value = input.value;
	if(isNaN(input_value)){
		alert("输入的不是合法数字!");
		return false;
	}
	input_value = input_value.replace(/(^\s*)|(\s*$)/g, ""); //删除左右两端的空格

	if(data.length >= 60){
		alert("超过输入限制（60个）,请删除不需要的数据后再输入！");
		return false;
	}
	if(input_value < 10 || input_value > 100){
		alert("请输入10-100的数!");
		return false;
	}
	return input_value;
}

/*
*	左侧入
*/
function addLeft(){
	var inputText = getInput();
	if(inputText === false) return;
	data.unshift(inputText);

	//渲染图表
	renderChart();
}
/*
*	右侧入
*/
function addRight(){
	var inputText = getInput();
	if(inputText === false) return;
	data.push(inputText);

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
/*
*	渲染图表
*/
function renderChart(){
	var api_chart = document.getElementById("api-chart");
	  //设定宽度
	api_chart.style.height = "20px";
	api_chart.style.lineHeight = "20px";
	api_chart.innerHTML = "";
	var bgColor = "red";
	for(var i = 0 ; i < data.length ; i++){
		api_chart.innerHTML += "<span onclick=delClick("+i+") style='display:inline-block;margin-left:1px;width:20px;height:20px;background-color:"+bgColor+";cursor:pointer;'>"+data[i];
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

	add_left.onclick = function(){addLeft();};
	add_right.onclick = function(){addRight();};
	del_left.onclick = function(){delLeft();};
	del_right.onclick = function(){delRight();};
}


/*
*	初始化
*/
function init(){
	initBtnEvent();
	renderChart();
}

init();