var myApp = angular.module('myApp');

myApp.controller('UserController', ['$scope', '$http', '$locationProvider', '$routeParams', function($scope, FileSaver,$http,getHost,$locationProvider, $routeParams){
	console.log('UserController loaded...');
	    $scope.serviceurl = getHost.host();
	   


	
            $scope.Save = function () {

                var request = {
                    method: 'POST',
                    url: 'localhost:5000/api/emp/register',
                    data: formdata,
                    headers: {
                        'Content-Type': undefined
                    }
                };

                // SEND THE FILES.
                $http(request)
                    .success(function (d) {
                        alert(d);
                    })
                    .error(function () {
                    });
            }


	
}]);