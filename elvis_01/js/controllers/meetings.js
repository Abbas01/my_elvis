myApp.controller('MeetingsController',
  function($scope, $rootScope, $firebase,
    CountMeetings, FIREBASE_URL) {
  var ref = new Firebase('https://shining-fire-3084.firebaseio.com/');

  var meetingsInfo = $firebase(ref);
  var meetingsObj = meetingsInfo.$asObject();

  meetingsObj.$loaded().then(function(data) {
    $scope.meetings = data;
  }); //make sure meetings data is loaded


  $scope.addMeeting = function() {
    meetingsInfo.$push({
      name: $scope.meetingname,
      lastname: $scope.lastname,
      email: $scope.email,
      description: $scope.description,
      date: $scope.date,
          }).then(function() {
      $scope.meetingname='';
      $scope.lastname='';
      $scope.email='';
      $scope.description='';
      $scope.date='';
      
    });
  }; //addmeeting

  $scope.deleteMeeting = function(key) {
    meetingsInfo.$remove(key);
  }; //deleteMeeting


}); //MeetingsController