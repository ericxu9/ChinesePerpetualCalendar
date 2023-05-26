$.fn.extend({
	bindState: function(type, className, isBubble) {
		var $this = this;
		if (type == undefined) {
			type = 1;
		}
		if (className == undefined) {
			className = "";
		} else {
			className = className + "-";
		}
		if(isBubble==undefined){
			isBubble=false;
		}
		//绑定hover状态
		this.hover(function() {
			$(this).addClass(className + "hover");
		},
		function() {
			$(this).removeClass(className + "hover");
		});
		//点一下active,多个选择,点击选择,点击取消 复选
		if (type == 1 || type == "checkbox") {
			$(this).click(function(e) {
				$("."+className + "on").not($(this)).removeClass(className + "on");
				$(this).toggleClass(className + "on");
				if(isBubble){
					e.stopPropagation();
				}				
			});
		} //点一下active,点击单个选择 单选
		else if (type == 2 || type == "radio") {
			$(this).click(function() {
				$this.removeClass(className + "on");
				$(this).addClass(className + "on");
			});
		} //点一下active,单个选择,再点一下取消 单选可取消选择
		else if (type == 3 || type == "toggle") {
			$(this).click(function() {
				var hasOn = $(this).hasClass(className + "on");
				$this.removeClass(className + "on");
				if (hasOn) {
					$(this).removeClass(className + "on");
				} else {
					$(this).addClass(className + "on");
				}
			});
		}
	}
});


ArrayindexOf = function(n,arr){
	var arrayStr = arr.join("#1#");
	return arrayStr.indexOf(n);
	/*if("indexOf" in this){
		return this["indexOf"](n);
	}
	for(var i=0;i<this.length;i++){
		if(n===this[i]){
			return i;
		}
	}
	return -1;*/
}; 
//js 阻止事件冒泡
function stopProp (e) {
	 //如果提供了事件对象，则这是一个非IE浏览器
	if ( e && e.stopPropagation )//因此它支持W3C的stopPropagation()方法
	    e.stopPropagation();
	else//否则，我们需要使用IE的方式来取消事件冒泡
	    window.event.cancelBubble = true;
}

Date.prototype.format = function (format) {
    /* 
    * eg:format="yyyy-MM-dd hh:mm:ss"; 
    */
	function getWeekDay(weekNum){
    	var weekDay="周";
    	switch (weekNum) {
    		case 1:
    			weekDay += "一";
    			break;
    		case 2:
    			weekDay += "二";
    			break;
    		case 3:
    			weekDay += "三";
    			break;
    		case 4:
    			weekDay += "四";
    			break;
    		case 5:
    			weekDay += "五";
    			break;
    		case 6:
    			weekDay += "六";
    			break;
    		default:
    			weekDay += "日";
    			break;
    	}
    	return weekDay;
    }
	
    var o = {
        "M+": (this.getMonth() + 1), // month  
        "d+": this.getDate(), // day  
        "h+": this.getHours(), // hour  
        "m+": this.getMinutes(), // minute  
        "s+": this.getSeconds(), // second  
        "w+": getWeekDay(this.getDay()),
        "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
        "S": this.getMilliseconds() // millisecond  
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "")
                .substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
                    : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}; 