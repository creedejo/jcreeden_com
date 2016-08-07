$(document).ready(function(){

});

//app
var app = angular.module('jcApp',[]);

//controller
app.controller('myCtrl',['$scope','$http', function($scope,$http) {

	$http.get("/data/content.json").success(function(response){
		$scope.data = response.info;
		$scope.firstName= $scope.data.firstname;
    	$scope.lastName= $scope.data.lastname;
    	$scope.about = $scope.data.about;
    	$scope.skills = $scope.data.skills;
    	$scope.employment = $scope.data.employment;
    	$scope.education = $scope.data.education;
	});


}]);