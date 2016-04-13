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


/**
 * sortAqiData
 * 对data进行从小到大的排序
 * 返回一个排序后的数组
 */

var flag = 0;
function sortAqiData() {
	var i = data.length -1
	var t;
	sortAqiData.moveOne = function(){
	    renderChart();
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
		document.getElementById("api-chart").childNodes[index].style.backgroundColor = "red";
	    data.splice(index,1);
	    data.push(temp);
	    i--;
	    if(i<0) {
	    	clearInterval(t);
	    	renderChart();
	    	if(flag === 0){
	    		flag = 1;
	    	}else if(flag === 1){
	    		flag = 0;
	    	}
	    }
	    // console.log(i+","+flag);
 	 }

	t = setInterval("sortAqiData.moveOne()",50);
}



/*
*	渲染图表
*/
function renderChart(){
	var api_chart = document.getElementById("api-chart");
	  //设定宽度
	var chartwidth = function(){
	    if(data.length <=10){
	      return "50px";
	    }else if(data.length <=30){
	      return "15px";
	    }else if(data.length >30){
	      return "9px";
	    }
	}();
	api_chart.style.width = "628px";
	api_chart.style.height = "300px";
	api_chart.style.lineHeight = "600px";
	api_chart.style.textAlign = "center";
	api_chart.innerHTML = "";


	for(var i = 0 ; i < data.length ; i++){
		api_chart.innerHTML += "<span onclick=delClick("+i+") style='display:inline-block;margin-left:1px;width:" 
	                            + chartwidth + ";height:" 
	                            + data[i]*3 + "px;background-color:red;cursor:pointer;'>";
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
	var sort_data = document.getElementById("sortdata");

	add_left.onclick = function(){addLeft();};
	add_right.onclick = function(){addRight();};
	del_left.onclick = function(){delLeft();};
	del_right.onclick = function(){delRight();};
	sort_data.onclick = function(){sortAqiData();};
}

/*
*	初始化赋值给data
*/
function initData(seed,num){
	if(seed < 10 && seed >100 && num < 0 && num >60) return console.log("initData Error!");
	data = [];
	for(var i = 0 ; i < num ; i++){
		data[data.length] =  Math.ceil(Math.random() * (seed-10) + 10);
	}
}

/*
*	初始化
*/
function init(){
	initData(80,45);
	initBtnEvent();
	renderChart();
}

init();