$(document).ready(function(){

});

//app
var app = angular.module('jcApp',[]);

//controller
app.controller('jcCtrl',['$scope','$http', '$sce', function($scope,$http,$sce) {

	$http.get("/data/content.json").success(function(response){
		$scope.data = response.info;
		$scope.firstname= $scope.data.firstname;
    	$scope.lastname= $scope.data.lastname;
    	$scope.about = $sce.trustAsHtml($scope.data.about);
    	$scope.skills = $scope.data.skills;
    	$scope.employment = $scope.data.employment;
    	$scope.education = $scope.data.education;
	});


}]);