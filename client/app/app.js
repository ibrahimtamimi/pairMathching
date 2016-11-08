angular.module('PairMatching',[
  'PairMatching.servics',
  'PairMatching.student',
  'ngRoute'
])

.controller('HeaderController', function ($scope, $window, $location, Student) {
  
  var test = function (argument) {
    console.log(Student.getAllStudent())
  }

})


















// .config(function($routeProvider, $httpProvider){
// 	$routeProvider
//   // .when('/',{
//   //   templateUrl:'app/index.html',
//   //   controller:'headerController'
//   // })
//   .otherwise('/')
  
// 	$httpProvider.interceptors.push('AttachTokens');
// })

// .factory('AttachTokens',function($window){
// 	var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.PairMatching');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })
// .run(function ($rootScope, $location) {
//    $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//   //   // if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
//   //   //   $location.path('/signin');
//   //   }
//    });
// });
