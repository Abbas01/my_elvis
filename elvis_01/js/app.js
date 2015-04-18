var myApp = angular.module('myApp', ['ngRoute',
'firebase', 'appControllers'])
.constant('FIREBASE_URL', 'https://shining-fire-3084.firebaseio.com/');

var appControllers = angular.module('appControllers',
  ['firebase']);



myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    
    when('/Elvisss', {
      templateUrl: 'views/Elvisss.html',
      controller: 'ElvisssController',
      resolve : {
        currentAuth: function(Authentication) {
          return 0;
        }
      }

    });
}]);