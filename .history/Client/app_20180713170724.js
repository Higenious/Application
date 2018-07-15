var myApp = angular.module('myApp',['ngRoute']);
   
myApp.config(["$routeProvider","$locationProvider", function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
 		controller:'empController',
 		templateUrl: ''
     	})    
        .when("/home", {
            templateUrl: "views/Welcome.html",
            controller:'empController'
        })
        .when("/emp/add", {
            templateUrl: "views/addEmp.html",
            controller:'addEmp.js'
        }) 
        .when("/emp/remove", {
            templateUrl: "views/rmEmp.html",
            controller:'empController'
        })
        .when("/emp/all", {
            templateUrl: "views/allEmp.html",
            controller:'empController'
        }).otherwise({
        redirectTo: "/"
    });
    $locationProvider.hashPrefix('');
}]);


myApp.controller('empController', empController)
    .controller('addEmp', addEmp);
