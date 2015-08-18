seekr.controller('jobCandidatesCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
  var api = Restangular.all('jobseekers');


  var cardTypes = api.getList().then(function(result){
      $scope.cards = result; });


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
}]);
