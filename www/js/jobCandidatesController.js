seekr.controller('jobCandidatesCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
  var api = Restangular.all('jobseekers');


  var jobseekerData = api.getList().then(function(result){
      $scope.jobseekers = result; });


  $scope.addCard = function(i) {
    var newCard = jobseekerData[Math.floor(Math.random() * jobseekerData.length)];
    newCard.id = Math.random();
    $scope.jobseekers.push(angular.extend({}, newCard));
  };

  for (var i = 0; i < jobseekerData.length; i++) $scope.addCard();

  $scope.cardSwipedLeft = function(index) {
    console.log('Left swipe');
  };

  $scope.cardSwipedRight = function(index) {
    console.log('Right swipe');
  };

  $scope.cardDestroyed = function(index) {
    $scope.jobeekers.splice(index, 1);
    console.log('Card removed');
  };
}]);
