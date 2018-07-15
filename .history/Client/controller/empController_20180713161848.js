var myApp = angular.module('myApp');

myApp.controller('empController', ['$scope', '$http', '$locationProvider', '$routeParams', function ($scope, FileSaver, $http, getHost, $locationProvider, $routeParams) {
    console.log('empController loaded...');
    $scope.serviceurl = getHost.host();



<p>Employee  Id: <input type="text" ng-model="id" ></p>
    <p>Employee  Name: <input type="text" ng-model="name" ></p>
    <p>Employee  Address : <input type="text" ng-model="address" ></p>
    <p>Employee  DOB: <input type="text" ng-model="dob" ></p>
    <p>Employee  Image: <input type="text" ng-model="image" ></p>
    <p>Employee  Phone: <input type="number" ng-model="phone" ></p>
    <p>Employee  Email: <input type="email" ng-model="email" ></p>
    $scope.SendData = function () {
        console.log('sendata function called...');
        ///$scope.serviceurl = getHost.host();
        //$scope.serviceurl = getHost.host();
        var host = document.location.host
        console.log(host);
        var data = { employeeId: $scope.id, employeeName: $scope.name, employeeDcob: $scope.dob, employeeEmail: $scope.email, employeeAddress: $scope.address, employeePhone: $scope.phone, employeeImage: $scope.image };
        console.log(data);
        $http({
            method: 'POST',
            url: 'http://localhost:5000/api/emp/register',
            data: data
        }).then(function successCallback(response) {
            swal("Good job!", "You clicked the button!", "success");
        }, function errorCallback(response) {
            swal("Try Again!", "You clicked the button!", "error");
        });

    }




}]);
