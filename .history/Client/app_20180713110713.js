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
            templateUrl: "views/addEmp.html",
            controller:'empController'
        }) .when("/user/remove", {
            templateUrl: "views/allEmp.html",
            controller:'empController'
        }).otherwise({
        redirectTo: "/"
    });
    $locationProvider.hashPrefix('');
}]);