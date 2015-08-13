// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var seekr = angular.module('Seekr', ['ionic']);

seekr.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

seekr.controller('MainCtrl', function($scope, $http) {

  $http.get('http://pacific-everglades-2252.herokuapp.com/api/jobseekers').then(function(resp) {
    $scope.jobseekers = resp.data;
    }, function(err) {
      console.error('ERR', err); // err.status will contain the status code
    });
});
