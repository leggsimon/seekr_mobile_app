// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var seekr = angular.module('Seekr', ['ionic', 'ngResource']);

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

seekr.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  });

  $stateProvider.state('signIn', {
    url: '/signin',
    templateUrl: 'templates/signIn.html'
  });

  $stateProvider.state('employerSignUp', {
    url: '/employersignup',
    templateUrl: 'templates/employerSignUp.html'
  });

  $stateProvider.state('jobseekerSignUp', {
    url: '/jobseekersignup',
    templateUrl: 'templates/jobseekerSignUp.html'
  });

  $stateProvider.state('jobs', {
    url: '/jobs',
    templateUrl: 'templates/jobs.html'
  });

  $stateProvider.state('jobInfo', {
    url: '/jobs/:id',
    templateUrl: 'templates/jobInfo.html'
  });

  $stateProvider.state('newJob', {
    url: '/job/new',
    templateUrl: 'templates/newJob.html'
  });

  $stateProvider.state('jobCandidates', {
    url: '/jobseekers',
    templateUrl: 'templates/jobCandidates.html'
  });

  $urlRouterProvider.otherwise('home');
});
