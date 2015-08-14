seekr.controller('jobCandidatesCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

  var url = 'http://tranquil-peak-9751.herokuapp.com/api';

  $http.get(url + '/jobseekers').then(function(resp) {
    $scope.jobseekers = resp.data;

    }, function(err) {
      console.error('ERR', err); // err.status will contain the status code
  });

}]);
