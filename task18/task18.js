var data=[];
$ = function (el) { return document.querySelector(el); };
function render() {
    $('#output').innerHTML =
    data.map(function(d) { return "<div>" + d + "</div>"; })
    .join('');
    }
function checkValue(){
  var num = $('#num').value;
	if(isNaN(num))
　　{
　　alert("请输入数字！");
　　return false;
　　} else{
	return parseInt(num);
}
}
    function deal(func, succ) {
      var args = [].slice.call(arguments, 2);
      return function(e) {
        try {
          var arg = args.map(function(item) {
            return typeof item === "function" ? item(e) : item;
          });
          var result = func.apply(data, arg);

          if (succ != null) {
            succ(result);
          }
        } catch (ex) {
          alert(ex.message);
        }
        render();
      };
    }
    function getDel(e) {
      var node = e.target;
      return [].indexOf.call(node.parentNode.children, node);
    }
    $('#leftadd').onclick = deal([].unshift, null, checkValue);
    $('#rightadd').onclick = deal([].push, null, checkValue);
    $('#leftdel').onclick = deal([].shift, window.alert);
    $('#rightdel').onclick = deal([].pop, window.alert);
    $('#output').onclick = deal([].splice, null, getDel, 1);