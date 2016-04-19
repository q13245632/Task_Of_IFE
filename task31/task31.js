$ = function (el) { return document.querySelector(el); };
function showOptions(){
	switch($('#city').value){
		case 'BJ':
		$('#schoolname').innerHTML="<option value='Peking'>北京大学</option>"+"<option value='Tsing'>清华大学</option>";break;
		case 'NJ':
		$('#schoolname').innerHTML="<option value='NanJing'>南京大学</option>"+"<option value='HeHai'>河海大学</option>";break;
		case 'SH':
		$('#schoolname').innerHTML="<option value='Fudan'>复旦大学</option>"+"<option value='SHJiaoTong'>上海交通大学</option>";break;
		case 'XA':
		$('#schoolname').innerHTML="<option value='XAJiaoTong'>西安交通大学</option>"+"<option value='XATel'>西安电子科技大学</option>";break;
	}
}
function showDivs(){
	if ($('#radio1').checked) {
		$('.inSchoolSec').className="inSchoolSec";
		$('.outSchoolSec').className="outSchoolSec hide";
	} else if ($('#radio2').checked){
		$('.inSchoolSec').className="inSchoolSec hide";
		$('.outSchoolSec').className="outSchoolSec";
	}
}