angular.module('PairMatching',[
  'PairMatching.services',
  'PairMatching.student',
  'ngRoute'
])

.controller('HeaderController', function ($scope, $window, $location, Student, DayBord, History) {
  $scope.allStudent = [];
  $scope.getedDataStudent = {};
  $scope.allHistory = [];
  //=============================================================================
    $scope.getSudentInfo = function (id) {
      Student.getStudent(id)
    .then(function (resp) {
        $scope.getedDataStudent = resp                
      })  
    };

    $scope.getHistory = function () {
      History.getAllStudentHistory()
      .then(function (resp) {
        $scope.allHistory = resp;
      })
    };

    $scope.addToHistory = function (driver, navigater) {
      History.addStudentHistory({student : driver, old_Pair : navigater});
    } 

    $scope.shuffleStudent = function () {
      var j, x, i;
      for (i = $scope.allStdudent.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = $scope.allStdudent[i - 1];
          $scope.allStdudent[i - 1] = $scope.allStdudent[j];
          $scope.allStdudent[j] = x;
      };
    };
    
    $scope.addSlote = function (driver, navigater) {
      DayBord.addSlot({driver : driver, navigater : navigater});
    }



  //=============================================================================
    $scope.addStudent = function () {
      $('.infoData').val('');
      Student.addStudent($scope.studentData);
    }

    $scope.drawStudent = function () {
      var x = Student.getAllStudent()
      		.then(function (resp) {
      			$scope.allStudent = resp;
      			console.log( $scope.allStudent);
      		})
    }

})

