seekr.controller('jobOfferCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

  var url = 'http://tranquil-peak-9751.herokuapp.com/api';

  $scope.mapToggle = function(displayOverlay) {
    if (displayOverlay) {
      return false
    } else {
      return true
    }
    console.log('click');
  };

  $http.get(url + '/jobseeker/' + [$stateParams.id] + '/offers').then(function(resp) {
    $scope.jobOffers = resp.data;

    }, function(err) {
      console.error('ERR', err); // err.status will contain the status code
  });

}]);
