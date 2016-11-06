angular.module('pairMatching',[
  'pairMatching.servics',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider){
	$routeProvider
  .when('/',{
    templateUrl:'app/index.html',
    controller:'AuthController'
  })
  .otherwise('/')
  
	$httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens',function($window){
	var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.pairMatching');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
