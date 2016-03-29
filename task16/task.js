/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var city = document.getElementById("aqi-city-input");
var air  = document.getElementById("aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
   var cityname=city.value.trim();
   var airvalue=air.value.trim();
   if (airvalue.match(/^\d+$/))  {
    aqiData[cityname]=airvalue;
        return aqiData;   
   } else{
     alert("输入的数值不合法，请重新输入！");
    return; 
   }
   
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

  var row,cell;
  var tab=document.getElementById("aqi-table");
  row=tab.insertRow(-1);
  for (var i = 0; i < 3; i++) {
    cell=row.insertCell(-1);
    cell.innerHTML=""+i;
  }
  var len=tab.rows.length;
  tab.rows[len-1].cells[0].innerHTML=cityname;
  tab.rows[len-1].cells[1].innerHTML=aqiData[cityname];
  tab.rows[len-1].cells[2].innerHTML="<input type="button" value="删除" id="delbtn"/>";
  /*var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
  for(var cityname in aqiData){ 
  items += "<tr><td>"+cityname+"</td><td>"+aqiData[cityname]+"</td><td><button data-city='"+cityname+"'>删除</button></td></tr>"
  }
  document.getElementById("aqi-table").innerHTML = cityname ? items : "";*/

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  var tab=document.getElementById("aqi-table");
  var length=tab.rows;
  tab.deleteRow(length-1);
  //delete aqiData[cityname];
  renderAqiList();
}

function init() {
      // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数 
     var addbtn=document.getElementById("add-btn");
     addbtn.addEventListener("click", addBtnHandle); 
   // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数 
     var delbtn=document.getElementById("delbtn");
      delbtn.addEventListener("click", delBtnHandle); 
     //document.getElementById("aqi-table").addEventListener("click", function(event){          
      //if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.cityname); 
}

init();
