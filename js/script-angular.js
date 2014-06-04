if(typeof angular == 'undefined' )
{
	alert("jalsd");
}
else
{
//	alert("good");
}

	var myapp = angular.module("myapp", ['ngRoute','fox.scrollReveal',
		'angular-loading-bar','ngAnimate'])
		.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    		cfpLoadingBarProvider.latencyThreshold = 0.5;
  		}]);	
	console.log("ok");

	myapp.controller("homeController", function ($scope)
	{
		$scope.id = "hahah";
	});

	myapp.controller("eventController",function ($scope)
	{
		$scope.id = "asdsa";
	});

	myapp.controller("sponsorsController",function($scope)
	{
		$scope.id = "nothing";
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
		otherwise
		({
			redirectTo: '/'
		});
	}
	]);