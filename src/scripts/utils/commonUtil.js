var commonUtil = {
	setFocus:function($el){
       $el.addClass("active").siblings().removeClass("active");
	},
	setUnit:function()
	{
		console.log("20161128");
	}
}

module.exports = commonUtil;