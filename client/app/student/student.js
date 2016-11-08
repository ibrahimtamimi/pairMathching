angular.module('PairMatching.student',[])
.controller('StudentController',function($scope, $window, $location, Student, History, DayBord){
	$scope.tab = 1;
	
    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

   
});
