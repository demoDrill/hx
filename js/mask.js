
	/**
 *   提示框
 * @param obj  obj类型为对象， 其属性有:
 * obj.title        弹窗的顶部的标题     默认为所需证件
 * obj.textContent  中间内容文字     
 * obj.addContarner 弹窗加在那个容器上   默认为body
 * obj.btnclose     关闭按钮
 * obj.sureFunction    回调函数
 * @constructor
 */
function ShowTooltip(obj) {
    var title = "所需证件"
    var addContainer = "body";
    var attrContarner = {
			item: []
		}
    var sureFunction = function () {
    }
    if (arguments.length > 0) {
        if (typeof obj == "object") {
            title = obj.title || title;
            addContainer = obj.addContarner || addContainer;
            sureFunction = obj.sureFunction || sureFunction;
            attrContarner = obj.attrContarner || attrContarner;
        } else {
            console.log("参数类型错误")
        }
    }
	 var tooltipHtml ='<div class="shade"></div><div class="mask_pull"><div class="mask_pull_tit flex"><span class="mask_pull_name">' + title + '</span>'+
					'<span class="pull-icon-close"><i class="iconfont icon-guanbi"></i></span></div>'+
					'<ul class="mask_pull_ul">'+
						'<script id="template" type="text/html">{{each item as index}}<li class="flex"><a href="#">{{index.name}}</a><span class="correct iconfont icon-weibiaoti14"></span></li>'+
						'{{/each}}</script>'+
					'</ul>'+
				'</div>'
     $(addContainer).append(tooltipHtml);
     var html = template("template", attrContarner);
	 $('.mask_pull_ul').append(html);
	 $('.mask_pull_ul li').each(function(){
		$(this).on('tap',function(){
			$(this).addClass('mask_hover');
			$(this).siblings().removeClass('mask_hover');
			$(this).find('.correct').addClass('correct_hover');
			$(this).siblings().find('.correct').removeClass('correct_hover');
		})
	});
}
$(document.body).on("click", ".pull-icon-close", function () {
     $(".mask_pull").slideUp(200);
     $('.shade').remove();
});
$(document.body).on("click", ".shade", function () {
     $(".mask_pull").slideUp(200);
     $('.shade').remove()
 })    
