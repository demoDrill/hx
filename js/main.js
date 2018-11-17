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

//加载遮罩层
zstanc();
zuijdo();
function zstanc(){
    document.write('<div class="jiz_dongt">'+
    '<div class="mask"></div>'+
    '<div class="gt_huxzlg">'+
    '<img src="../image/touxiang@2x.png" alt=""/>'+
    '<p>加载中，请稍后</p>'+
    '</div>'+
    '</div>')
}
//顶部导航
function zuijdo(){
    $('.hader_zuij').html();
}