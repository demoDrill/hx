/**
 * Created by Administrator on 2018/7/25.
 */
var html = document.getElementsByTagName('html')[0];
var width = window.innerWidth;
var fontSize = 100/750*width;
html.style.fontSize = fontSize +'px';
window.onresize = function(){
    var html = document.getElementsByTagName('html')[0];
    var width = window.innerWidth;
    var fontSize = 100/750 * width;
    html.style.fontSize = fontSize +'px';
}
//开关
//$(function(){
//	switchEvent("#fly",function(){
//		$("#network").slideUp();
//	},function(){
//		$("#network").slideDown();
//	});
//	switchEvent("#directory",function(){
//		$("#directory_content").fadeIn();
//	},function(){
//		$("#directory_content").fadeOut();
//	});
//	
//});
