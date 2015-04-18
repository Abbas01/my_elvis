var myApp = angular.module('myApp', ['ngRoute',
'firebase', 'appControllers'])
.constant('FIREBASE_URL', 'https://ajcrud.firebaseio.com/');

var appControllers = angular.module('appControllers',
  ['firebase']);

//myApp.run(['$rootScope', '$location', function($rootScope, $location) {
//  $rootScope.$on('$routeChangeError',
//  function(event, next, previous, error) {
//   if(error === 'AUTH_REQUIRED') {
//      $rootScope.message='Sorry, you must log in to access that page';
//     $location.path('/login');
//   }
// });
//}]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    
    when('/meetings', {
      templateUrl: 'views/meetings.html',
      controller: 'MeetingsController',
      resolve : {
        currentAuth: function(Authentication) {
          return 0;
        }
      }

    });
}]);