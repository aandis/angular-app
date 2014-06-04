
function alertMsg() 
{      
	//your func
 //    $('#heading').removeAttr("data-scroll-reveal");
	// $('#homepage-logo').removeAttr("data-scroll-reveal");
}

document.addEventListener("DOMContentLoaded", function() 
{
	$("#homepage-logo-box").hide();
	$(".description").hide();
	$(".list").mouseover(function(){
		$(this).find(".description").show();
	});
	$(".list").mouseleave(function(){
		$(this).find(".description").hide();
	});
	setTimeout(alertMsg,3000);

	$(".people-box").hide(); 
});
