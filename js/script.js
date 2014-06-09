
var news = [
	
	"news 1",
	"news 2",
	"news 3"
];

document.addEventListener("DOMContentLoaded", function() 
{
	$(".description").hide();
	$(".list").mouseover(function(){
		$(this).find(".description").show();
	});
	$(".list").mouseleave(function(){
		$(this).find(".description").hide();
	});

	var i = 0;
	setInterval(function(){
		if(i == 3)
			i = 0;
//		$("#news").fadeOut();
		$("#news").fadeIn().text(news[i]);
		i = i + 1;
	},1000);

});
