var myApp = angular.module('myApp');

myApp.controller('empController', ['$scope', '$http', '$locationProvider', '$routeParams', function ($scope, FileSaver, $http, getHost, $locationProvider, $routeParams) {
    console.log('empController loaded...');
    $scope.serviceurl = getHost.host();




    $scope.SendData = function () {
        ///$scope.serviceurl = getHost.host();
        //$scope.serviceurl = getHost.host();
        var host = document.location.host
        console.log(host);
        var data = { firstName: $scope.firstName, lastName: $scope.lastName };
        console.log(data);
        $http({
            method: 'POST',
            url: 'http://localhost:5555/api/user/register',
            data: data
        }).then(function successCallback(response) {
            swal("Good job!", "You clicked the button!", "success");
        }, function errorCallback(response) {
            swal("Try Again!", "You clicked the button!", "error");
        });

    }




}]);
