var myApp = angular.module('myApp',['ngRoute']);


myApp.config(["$routeProvider","$locationProvider", function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
 		controller:'UserController',
 		templateUrl: ''
     	})    
        .when("/home", {
            templateUrl: "views/home.html"
        })
        .when("/user/add", {
            templateUrl: "views/uploadcsv.html",
            controller:'UserController'
        }).otherwise({
        redirectTo: "/"
    });
    $locationProvider.hashPrefix('');
}]);