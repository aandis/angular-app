$(document).ready(function(){
	var progress = 0;
    // soundBoard.loadAll(function () {
    //     progress.value = progress.value+1;
    // });
    $([
    	'images/tex.jpg',
		'images/about/1.png',
        "images/gallery/zeitgeist-yogesh-110.jpg",
        "img/photo-festival9.jpg" ,
        "images/gallery/zeitgeist-yogesh-24.jpg",
        "images/gallery/zeitgeist-tudu-1343.jpg",
        "images/gallery/zeitgeist-yogesh-384.jpg",
        "img/photo-festival13.jpg",
        "images/gallery/zeitgeist-yogesh-73.jpg",
        "img/photo-festival8.jpg",
        "img/photo-festival10.jpg" ,
        "images/gallery/zeitgeist-tudu-4817.jpg",
        "images/gallery/zeitgeist-tudu-4729.jpg",
        "images/gallery/zeitgeist-yogesh-133.jpg",
        "images/gallery/zeitgeist-yogesh-401.jpg",
        "images/gallery/zeitgeist-yogesh-118.jpg",
    	'images/people/Amit.jpg',
    	'images/people/Tushar.jpg',
    	'images/people/Vishal.jpg',
    	'images/people/Paul.jpg',
		'images/sponsors/Logo_0025_Layer-13.png',
		'images/Icons-Register.png',
		'images/sponsors/Logo_0022_Layer-16.png',
		'images/zwhite.png',
		'images/sponsors/Logo_0011_Layer-23.png',
		'images/sponsors/Logo_0028_Layer-36.png',
		'images/sponsors/Logo_0017_Layer-11.png',
		'images/sponsors/Logo_0015_Layer-21.png',
		'images/Icons-Contact.png',
		'images/sponsors/Logo_0009_Layer-25.png',
		'images/sponsors/Logo_0021_Layer-17.png',
		'images/Z-color.png',
		'images/sponsors/Logo_0027_Layer-37.png',
		'images/sponsors/Logo_0008_Layer-26.png',
		'images/sponsors/Logo_0030_Layer-35.png',
		'images/sponsors/Logo_0023_Layer-15.png',
		'images/sponsors/Logo_0026_Layer-8.png',
		'images/Icon-Events-color.png',
		'images/sponsors/Logo_0010_Layer-24.png',
		'images/Icons-Events.png',
		'images/Icons-Gallery.png',
		'images/sponsors/Logo_0007_Layer-27.png',
		'images/sponsors/Logo_0006_Layer-40.png',
		'images/Icon-Contact-color.png',
		'images/Icon-AboutUs-color.png',
		'images/sponsors/Logo_0005_Layer-28.png',
		'images/Icon-Gallery-color.png',
		'images/Icons-Y.png',
		'images/sponsors/Logo_0031_Layer-34.png',
		'images/sponsors/Logo_0020_Layer-19.png',
		'images/sponsors/Logo_0019_Layer-9.png',
		'images/sponsors/Logo_0014_Layer-22.png',
		'images/Icon-Register-color.png',
		'images/sponsors/Logo_0018_Layer-10.png',
		'images/Z-white.png',
		'images/Icon-F-color.png',
		'images/sponsors/Logo_0013_Layer-20.png',
		'images/Icon-Sponsors-color.png',
		'images/sponsors/Logo_0003_Layer-30.png',
		'images/sponsors/Logo_0016_Layer-12.png',
		'images/Icons-Sponsors.png',
		'images/sponsors/Logo_0001_Layer-32.png',
		'images/sponsors/Logo_0024_Layer-14.png',
		'images/Icons-F.png',
		'images/Icon-Y-color.png',
		'images/New-Background.jpg',
		'images/Icons-AboutUs.png',
		'images/sponsors/Logo_0000_Layer-33.png',
		'images/sponsors/Logo_0002_Layer-31.png',
		'images/sponsors/Logo_0004_Layer-29.png',
    ]).each(function(){
        $('<img/>')
        .load(function() { progress = progress+1;

			    $(".dial").stop().animate({value: Math.ceil(progress/70*100)}, {
			       duration: 1000,
			       easing: "swing", 
			       progress: function() { 
			           $(".dial").val(Math.ceil(this.value)).trigger("change"); 
			       }
			    });

        	//$('.dial').val(Math.ceil(progress/52*100)).trigger("change");
    		
    		if(progress==70) loadpage()})
       // .error(function() { alert("error"); })
        .attr("src", this);
    });
	    
});

function loadpage()
{
		document.getElementById("audio-player").play();
		$('<img/>').attr('src', 'images/New-Background.jpg').load(function() {
	        $(this).remove(); // prevent memory leaks as @benweet suggested
	        $('body').fadeOut('slow', function() {
			    $(this).css({'background-image':'url(images/New-Background.jpg)',
					'-moz-background-size':'cover',
					'-webkit-background-size' :'cover',
					'background-size' : 'cover',
					'background-repeat' : 'repeat',
					'background-attachment' :'fixed',
					'text-align' : 'center'}
	          );
			    $('#loader-box').hide();
				angular.element($('#maindisplay')).scope().$apply(function (){
					angular.element($('#maindisplay')).scope().webloader=false;
				});
			    
			}).fadeIn('slow');//.delay(1000).fadeTo('slow', 1);
	       //  $('body').css({
	       //  	'background-image':'url(images/New-Background.jpg)',
	       //    '-moz-background-size':'cover',
	       //    '-webkit-background-size' :'cover',
	       //    'background-size' : 'cover',
	       //    'background-repeat' : 'no-repeat !important',
	       //    'background-attachment' :'fixed',
	       //    'text-align' : 'center',
	      	// });
	      });
}