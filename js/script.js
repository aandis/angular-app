
var news = [
	
	"Zeitgeist'14 is coming soon",
];

$(window).load(function(){
	$("body").fadeIn(2000);
});

$(document).ready(function(){
	$("#eventsHover").hide();
	$("#sponsorsHover").hide();
	$("#galleryHover").hide();
	$("#contactHover").hide();
	$("#registerHover").hide();
	$("#infoHover").hide();
	$(".description").hide();
	$("#logoHover").hide();
	$("#facebookHover").hide();
	$("#youtubeHover").hide();

	$("#logo").mouseover(function(){
		$("#logo").hide();
		$("#logoHover").show();
	});
	
	$("#logoHover").mouseleave(function(){
		$("#logo").show();
		$("#logoHover").hide();
	});


	$(".list").mouseover(function(){
		$(this).find(".description").show();
		var id = $(this).find(".nav-image").attr("id");
		if(id == "events")
		{
			$(this).find("#events").hide();
			$(this).find("#eventsHover").show();
		}
		else if(id == "sponsors")
		{
			$(this).find("#sponsors").hide();
			$(this).find("#sponsorsHover").show();		
		}
		else if(id == "gallery")
		{
			$(this).find("#gallery").hide();
			$(this).find("#galleryHover").show();	
		}
		else if(id == "contact")
		{
			$(this).find("#contact").hide();
			$(this).find("#contactHover").show();	
		}
		else if(id == "register")
		{
			$(this).find("#register").hide();
			$(this).find("#registerHover").show();		
		}
		else if(id == "info")
		{
			$(this).find("#info").hide();
			$(this).find("#infoHover").show();
		}
	});
	$(".list").mouseleave(function(){
		$(this).find(".description").hide();
		var id = $(this).find(".nav-image").attr("id");
		if(id == "events")
		{
			$(this).find("#events").show();
			$(this).find("#eventsHover").hide();
		}
		else if(id == "sponsors")
		{
			$(this).find("#sponsors").show();
			$(this).find("#sponsorsHover").hide();
		}
		else if(id == "gallery")
		{
			$(this).find("#gallery").show();
			$(this).find("#galleryHover").hide();
		}
		else if(id == "contact")
		{
			$(this).find("#contact").show();
			$(this).find("#contactHover").hide();
		}
		else if(id == "register")
		{
			$(this).find("#register").show();
			$(this).find("#registerHover").hide();
		}
		else if(id = "info")
		{
			$(this).find("#info").show();
			$(this).find("#infoHover").hide();
		}
	});

	$(".social-image").mouseover(function(){
		var id = $(this).attr("id");
		if(id == "facebook")
		{
			$("#facebook").hide();
			$("#facebookHover").show();	
		}
		else if(id == "youtube")
		{
			$("#youtube").hide();
			$("#youtubeHover").show();
		}
	});

	$(".social-image").mouseleave(function(){
		var id = $(this).attr("id");
		if(id == "facebookHover")
		{
			$("#facebook").show();
			$("#facebookHover").hide();
		}
		else if(id == "youtubeHover")
		{
			$("#youtube").show();
			$("#youtubeHover").hide();
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
