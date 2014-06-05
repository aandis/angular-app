
document.addEventListener("DOMContentLoaded", function() 
{
	$(".description").hide();
	$(".list").mouseover(function(){
		$(this).find(".description").show();
	});
	$(".list").mouseleave(function(){
		$(this).find(".description").hide();
	});

});
