if(typeof angular == 'undefined' )
{
	alert("jalsd");
}
else
{
//	alert("good");
}

	var myapp = angular.module("myapp", ['ngRoute','fox.scrollReveal']);
console.log("ok");

	myapp.controller("homeController", function ($scope)
	{
		$scope.id = "hahah";
	});

	myapp.controller("eventController",function ($scope)
	{
		$scope.id = "asdsa";
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
		otherwise
		({
			redirectTo: '/'
		});
	}
	]);