myApp.controller('MeetingsController',
  function($scope, $rootScope, $firebase,
    CountMeetings, FIREBASE_URL) {
  var ref = new Firebase('https://ajcrud.firebaseio.com/meetings');

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
      howmanydidyousee: $scope.howmanydidyousee    }).then(function() {
      $scope.meetingname='';
      $scope.lastname='';
      $scope.email='';
      $scope.description='';
      $scope.date='';
      $scope.howmanydidyousee='';
    });
  }; //addmeeting

  $scope.deleteMeeting = function(key) {
    meetingsInfo.$remove(key);
  }; //deleteMeeting


}); //MeetingsController