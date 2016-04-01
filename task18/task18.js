var arr=new Array();
function checkValue(numvalue){
	if(isNaN(numvalue))
　　{
　　alert("请输入数字！");
　　return false;
　　} else{
	return true;
}
}
function output(array){
	var output=document.getElementById("output");
	output.innerHTML=arr.map(function(d) { return "<div>" + d + "</div>"; })
          .join('');;
}
function leftadd(){
	var num_in=document.getElementById("num");
    var num_value=num_in.value;
	if(checkValue(num_value)){
        arr.unshift("<div>"+num_value+"</div>");
    output(arr);
}
}
function leftdel(){
    var num_in=document.getElementById("num");
    var num_value=num_in.value;
    var len=arr.length;
    if (len>0) {
    alert((arr.shift()).textContent);
	output(arr);
    } else {
    alert("数组为空，无法删除！");
    }
}
function rightadd(){
	var num_in=document.getElementById("num");
    var num_value=num_in.value;
    if(checkValue(num_value)){
    arr.push("<div>"+num_value+"</div>");
	output(arr);
}
}
function rightdel(){
    var num_in=document.getElementById("num");
    var num_value=num_in.value;
    var len=arr.length;
    if (len>0) {
    alert((arr.pop()).textContent);
    output(arr);
    } else {
    alert("数组为空，无法删除！");
    }
}
