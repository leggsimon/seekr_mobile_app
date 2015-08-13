seekr.controller('jobSeekerCtrl', function($scope, $http) {

  $http.get('http://pacific-everglades-2252.herokuapp.com/api/jobseekers').then(function(resp) {
    $scope.jobseekers = resp.data;
    }, function(err) {
      console.error('ERR', err); // err.status will contain the status code
    });
});
