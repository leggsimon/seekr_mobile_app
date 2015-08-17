// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var seekr = angular.module('Seekr', ['ionic', 'ngResource', 'ionic.contrib.ui.tinderCards']);

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

seekr.controller('CardsCtrl', function($scope) {
  var cardTypes = [{
    image: 'img/pic2.png',
    title: 'Paul'
  }, {
    image: 'img/pic5.png',
    title: 'Sanj'
  }, {
    image: 'img/pic3.png',
    title: 'Rob'
  }, {
    image: 'img/pic4.png',
    title: 'Jack'
  }, {
    image: '',
    title: 'Cristian\'s Nan'
  }, {
    image: '',
    title: 'Simon'
  }, {
    image: '',
    title: 'JD'
  } ];

  $scope.cards = [];

  $scope.addCard = function(i) {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  };

  for (var i = 0; i < cardTypes.length; i++) $scope.addCard();

  $scope.cardSwipedLeft = function(index) {
    console.log('Left swipe');
  };

  $scope.cardSwipedRight = function(index) {
    console.log('Right swipe');
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    console.log('Card removed');
  };
});


seekr.config(function($stateProvider, $urlRouterProvider) {

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

  $urlRouterProvider.otherwise('jobs');
});
