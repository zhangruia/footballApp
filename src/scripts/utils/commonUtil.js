var commonUtil = {
	setFocus:function($el){
       $el.addClass("active").siblings().removeClass("active");
	},
	setApp:function()
	{
		console.log("this is 20161129app");
	},
	setUnit:function()
	{
		console.log("20161128");
	}
}

module.exports = commonUtil;