var myApp = angular.module('myApp');

myApp.controller('UserController', ['$scope', '$http', '$locationProvider', '$routeParams', function($scope, FileSaver,$http,getHost,$locationProvider, $routeParams){
	console.log('UserController loaded...');
	    $scope.serviceurl = getHost.host();
	   


	
    //For upload CSV File

   

  // NOW UPLOAD THE FILES.
            $scope.uploadFiles = function () {

                var request = {
                    method: 'POST',
                    url: 'localhost:3000/user/uploadCsv',
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