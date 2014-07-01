if(typeof angular == 'undefined' )
{
	alert("Angular not supported");
}
else
{
//	alert("good");
}

	var myapp = angular.module("myapp", ['ngRoute','fox.scrollReveal','ngAnimate']);	
	console.log("ok");

	myapp.controller("homeController", function ($scope)
	{
		$scope.id = "hahah";
		$("#logo").css({"display":"none"});
	});

	myapp.controller("eventController",function ($scope)
	{
		$scope.id = "asdsa";
		$("#logo").css({"display":"block"});
	});

	myapp.controller("galleryController",function($scope)
	{
		$scope.id = "nothing";
		$("#logo").css({"display":"block"});
	});

	myapp.controller("sponsorsController",function($scope)
	{
		$scope.id = "nothing";
		$("#logo").css({"display":"block"});
	});

	myapp.config(['$routeProvider',function($routeProvider)
	{
		$routeProvider.
		when
		('/',
		{
			templateUrl: "partials/homepage.html",
			controller: "homeController"
		}).
		when
		('/events',
		{
			templateUrl : "partials/events.html",
			controller : "eventController"
		}).
		when
		('/sponsors',
		{
			templateUrl : "partials/sponsors.html",
			controller : "sponsorsController"
		}).
		when
		('/contact',
		{
			templateUrl : "partials/contact.html",
			controller : "sponsorsController"
		}).
		when
		('/gallery',
		{
			templateUrl : "partials/gallery.html",
			controller : "galleryController"
		}).
		when
		('/register',
		{
			templateUrl : "partials/register.html",
			controller : "sponsorsController"
		}).		
		otherwise
		({
			redirectTo: '/'
		});
	}
	]);