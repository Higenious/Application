var myApp = angular.module('myApp');

myApp.controller('addEmp', ['$scope', '$http', function ($scope, $http, getHost) {
    console.log('addEmp loaded...');
    //$scope.serviceurl = getHost.host();



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
