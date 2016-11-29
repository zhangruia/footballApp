var commonUtil = {
	setFocus:function($el){
       $el.addClass("active").siblings().removeClass("active");
	},
	setApp:function()
	{
		console.log("this is 20161129app");
	}
}

module.exports = commonUtil;