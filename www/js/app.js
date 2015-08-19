// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var seekr = angular.module('Seekr', ['ionic', 'ngResource', 'ionic.contrib.ui.tinderCards', 'restangular']);

seekr.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

seekr.directive('noScroll', function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      $element.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  };
});

seekr.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl(
    'https://tranquil-peak-9751.herokuapp.com/api');
});

seekr.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  });

  $stateProvider.state('jobseekerHome', {
    url: '/jobseekerhome',
    templateUrl: 'templates/jobseekerHome.html'
  });

  $stateProvider.state('jobOffers', {
    url: '/jobseeker/:id/offers',
    templateUrl: 'templates/jobOffers.html'
  });

  $stateProvider.state('jobseekerSignIn', {
    url: '/jobseekersignin',
    templateUrl: 'templates/jobseekerSignIn.html'
  });

  $stateProvider.state('employerSignIn', {
    url: '/employersignin',
    templateUrl: 'templates/employerSignIn.html'
  });

  $stateProvider.state('jobs', {
    url: '/jobs',
    templateUrl: 'templates/jobs.html'
  });

  $stateProvider.state('jobInfo', {
    url: '/jobs/:id',
    templateUrl: 'templates/jobInfo.html'
  });

  $stateProvider.state('jobInfo.candidates', {
    url: '/jobseekers/:requiredSkills',
    templateUrl: 'templates/jobCandidates.html'
  });

  $stateProvider.state('newJob', {
    url: '/job/new',
    templateUrl: 'templates/newJob.html'
  });

  $urlRouterProvider.otherwise('home');
});
