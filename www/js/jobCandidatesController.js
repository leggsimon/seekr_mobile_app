seekr.controller('jobCandidatesCtrl', ['$scope', '$http', '$stateParams', 'Restangular', function($scope, $http, $stateParams, Restangular) {
  var api = Restangular.all('offers/all/' + [$stateParams.id]);
  var url = 'http://tranquil-peak-9751.herokuapp.com/api/offers/';

  var jobseekerData = api.getList().then(function(result) {
    $scope.jobseekers = result;
  });


  $scope.addCard = function(i) {
    var newCard = jobseekerData[Math.floor(Math.random() * jobseekerData.length)];
    newCard.id = Math.random();
    $scope.jobseekers.push(angular.extend({}, newCard));
  };

  for (var i = 0; i < jobseekerData.length; i++) $scope.addCard();

  $scope.cardSwipedRight = function(id) {
    $scope.jobseekers.push(angular.extend({}, id));
    console.log('Candidate kept');
  };

  $scope.reject = function(id) {
    $http.post(url, {
      'job_id': $scope.jobInfo.id,
      'jobseeker_id': id,
      'accepted': false,
    }).success(function(data, status, headers, config) {
      console.log('Candidate rejected');
    });
  };

  $scope.offer = function(id) {
    $http.post(url, {
      'job_id': $scope.jobInfo.id,
      'jobseeker_id': id,
      'accepted': true,
    }).success(function(data, status, headers, config) {
      console.log('Candidate offered');
    });
  };

}]);
