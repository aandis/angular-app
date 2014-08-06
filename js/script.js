
var news = [
	
	"Updates will be coming soon",
	"Events will comoing soon",
	"Some other info will coming soon"
];

$(window).load(function(){
	$("body").fadeIn(2000);
});

//document.addEventListener("DOMContentLoaded", function() 
$(document).ready(function(){
	document.getElementById("logo").src='data:image/png;base64,' + logoimage;
	document.getElementById("events").src='data:image/png;base64,' + eventimage;
	document.getElementById("sponsors").src='data:image/png;base64,' + sponsorimage;
	document.getElementById("gallery").src='data:image/png;base64,' + galleryimage;
	document.getElementById("contact").src='data:image/png;base64,' + contactimage;
	document.getElementById("register").src='data:image/png;base64,' + registerimage;
	document.getElementById("facebook").src='data:image/png;base64,' + fbimage;
	document.getElementById("youtube").src='data:image/png;base64,' + youimage;
	document.getElementById("info").src='data:image/png;base64,' + infoimage;

	$(".description").hide();

	$("#logo").mouseover(function(){
		$(this).attr("src",'data:image/png;base64,' + logoimagecolor);
	});
	
	$("#logo").mouseleave(function(){
		$(this).attr("src",'data:image/png;base64,' + logoimage);
	});


	$(".list").mouseover(function(){
		$(this).find(".description").show();
		var id = $(this).find(".nav-image").attr("id");
		if(id == "events")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + eventimagecolor);
		}
		else if(id == "sponsors")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + sponsorimagecolor);			
		}
		else if(id == "gallery")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + galleryimagecolor);			
		}
		else if(id == "contact")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + contactimagecolor);			
		}
		else if(id == "register")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + registerimagecolor);			
		}
		else if(id == "info")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + infoimagecolor);
		}
	});
	$(".list").mouseleave(function(){
		$(this).find(".description").hide();
		var id = $(this).find(".nav-image").attr("id");
		if(id == "events")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + eventimage);
		}
		else if(id == "sponsors")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + sponsorimage);			
		}
		else if(id == "gallery")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + galleryimage);			
		}
		else if(id == "contact")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + contactimage);			
		}
		else if(id == "register")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + registerimage);			
		}
		else if(id = "info")
		{
			$(this).find(".nav-image").attr("src",'data:image/png;base64,' + infoimage);			
		}
	});

	$(".social-image").mouseover(function(){
		var id = $(this).attr("id");
		if(id == "facebook")
		{
			$(this).attr("src",'data:image/png;base64,' + fbimagecolor);	
		}
		else if(id == "youtube")
		{
			$(this).attr("src",'data:image/png;base64,' + youimagecolor);
		}
	});

	$(".social-image").mouseleave(function(){
		var id = $(this).attr("id");
		if(id == "facebook")
		{
			$(this).attr("src",'data:image/png;base64,' + fbimage);	
		}
		else if(id == "youtube")
		{
			$(this).attr("src",'data:image/png;base64,' + youimage);
		}
	});

	var i = 0;

	setInterval(function(){
		if(i == 3)
			i = 0;

		$('#news').text(news[i]);
		i = i + 1;
	},2000);

	// setInterval(function(){
	// 	if(i == 3)
	// 		i = 0;

	// 	// $("#news").fadeOut(function(){
	// 	// 	$(this).text(news[i]).fadeIn();
	// 	// });

	// 	$('#news').animate({'opacity' : 0 }, 1000, function(){
	// 		console.log(i);
	// 	 	$(this).text(news[i]);
	// 	}).animate({'opacity':1}, 1000);

	// 	i = i + 1;
	// },2000);

});
