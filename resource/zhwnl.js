function flightHandler(){
}
//Array.prototype.indexOf = function(item) { 
//	for (var i = 0; i < this.length; i++) { 
//		if (!!this[i]&&this[i].indexOf(item+"|")!=-1) 
//			return i; 
//	}
//	return -1; 
//} 
var firstcity="深圳";
var regcity=/[^\u4E00-\u9FA5]/g ;
$(document).ready(function(){
	// $("#weather").css("background","url(img/onloading.gif) no-repeat center");
	changeStyle();
	$(window).resize(function(){
		changeStyle();
	});
	//loadJsonp("深圳");

});

//初始化改变部分样式
function changeStyle(){
	var left=$(".Infobottom").offset().left;
	var top=$(".air").offset().top+30;
	$(".demo").css({"top":top-30,"left":left});
	$(".citySelector").css({"top":top,"left":left});
	var contentH = $("#indexWindow").height()-$(".head").height()-40;
	var main_height= contentH - 81;
	//$("#mainCal").height(main_height);
	$("#cont").height(main_height-32);
	$(".d_right,.black").unbind();
	$(".d_right").click(function(){
		$("#BigE").toggle();
		$(".black").toggle();
	});
	$(".black").click(function(){
		$("#BigE").hide();
		$(".black").hide();
	});
	setLeftHeight();
}

function setLeftHeight(){
	$(".everydayinfo").height($("#mainCal").prev()[0].clientHeight + $("#mainCal")[0].clientHeight);
}

