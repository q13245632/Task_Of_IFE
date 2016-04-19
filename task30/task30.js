$ = function (el) { return document.querySelector(el); };
var isCheckName,isCheckPass,isCheckPassCon,isCheckMail,isCheckPhone;//保存各个检查结果
//浏览器兼容性
function catchEvent(eventObj,event,eventHandler){ 
	if (eventObj.addEventListener) {
		eventObj.addEventListener(event,eventHandler,false);
	} else if (eventObj.attachEvent) {
		event="on"+event;
		eventObj.attachEvent(event,eventHandler);
	}
}
//检查名字
function checkName(){
	if ($('#textname').value.length==0) {
		$('#name span').innerHTML="姓名不能为空";
		$('#name span').style.color='red';
		$('#textname').style.borderColor='red';
		isCheckName=false;//保存检查结果
	} else if ($('#textname').value.length>=4&&$('#textname').value.length<=16) {
		$('#name span').innerHTML="格式正确";
		$('#name span').style.color='black';
		$('#textname').style.borderColor='black';
		isCheckName=true;
	} else {
		$('#name span').innerHTML="格式错误，请重新输入";
		$('#name span').style.color='red';
		$('#textname').style.borderColor='red';
		isCheckName=false;
	}
}
//检查密码
function checkPass(){
	if ($('#textpass').value.length==0) {
		$('#pass span').innerHTML="密码不能为空";
		$('#pass span').style.color='red';
		$('#textpass').style.borderColor='red';	
		isCheckPass=false;
	} else if ($('#textpass').value.length<=12) {
		$('#pass span').innerHTML="格式正确";
		$('#pass span').style.color='black';
		$('#textpass').style.borderColor='black';
		isCheckPass=true;
	} else {
		$('#pass span').innerHTML="密码过长，请重新输入";
		$('#pass span').style.color='red';
		$('#textpass').style.borderColor='red';	
		isCheckPass=false;	
	}
}
//检查第二次输入的密码
function checkPassCon(){
	if ($('#textpassconfirm').value.length==0) {
		$('#passconfirm span').innerHTML="密码不能为空";
		$('#passconfirm span').style.color='red';
		$('#textpassconfirm').style.borderColor='red';
		isCheckPassCon=false;	
	} else if ($('#textpassconfirm').value==$('#textpass').value) {
		$('#passconfirm span').innerHTML="格式正确";
		$('#passconfirm span').style.color='black';
		$('#textpassconfirm').style.borderColor='black';
		isCheckPassCon=true;	
	} else {
		$('#pass span').innerHTML="两次密码输入不相同，请重新输入！";
		$('#passconfirm span').innerHTML="两次密码输入不相同，请重新输入！";
		$('#pass span').style.color='red';
		$('#textpass').style.borderColor='red';	
		$('#passconfirm span').style.color='red';
		$('#textpassconfirm').style.borderColor='red';	
		isCheckPassCon=false;	
	}
}
//检查邮箱
function checkMail(){
	if ($('#textmail').value.length==0) {
		$('#mail span').innerHTML="邮箱不能为空";
		$('#mail span').style.color='red';
		$('#textmail').style.borderColor='red';	
		isCheckMail=false;
	} else if (/^[\w]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test($('#textmail').value)) {
		$('#mail span').innerHTML="邮箱格式正确";
		$('#mail span').style.color='black';
		$('#textmail').style.borderColor='black';
		isCheckMail=true;	
	} else {
		$('#mail span').innerHTML="邮箱格式不正确，请重新输入";
		$('#mail span').style.color='red';
		$('#textmail').style.borderColor='red';	
		isCheckMail=false;
	}
}
//检查手机号码
function checkPhone(){
	if ($('#textphone').value.length==0) {
		$('#phone span').innerHTML="手机号不能为空";
		$('#phone span').style.color='red';
		$('#textphone').style.borderColor='red';
		isCheckPhone=false;	
	} else if (/^\d{11}$/.test($('#textphone').value)) {
		$('#phone span').innerHTML="手机号格式正确";
		$('#phone span').style.color='black';
		$('#textphone').style.borderColor='black';
		isCheckPhone=true;	
	} else {
		$('#phone span').innerHTML="手机号格式不正确，请重新输入";
		$('#phone span').style.color='red';
		$('#textphone').style.borderColor='red';
		isCheckPhone=false;		
	}
}
function btnClick(){
	if (isCheckName&&isCheckPass&&isCheckPassCon&&isCheckMail&&isCheckPhone) {
		alert("提交成功！");
	} else {
		alert("输入错误，请重新输入！");
	}
}