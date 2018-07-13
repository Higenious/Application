var myApp = angular.module('myApp',['ngRoute']);


myApp.config(["$routeProvider","$locationProvider", function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
 		controller:'empController',
 		templateUrl: ''
     	})    
        .when("/home", {
            templateUrl: "views/home.html",
            controller:'empController'
        })
        .when("/user/add", {
            templateUrl: "views/uploadcsv.html",
            controller:'empController'
        }).otherwise({
        redirectTo: "/"
    });
    $locationProvider.hashPrefix('');
}]);