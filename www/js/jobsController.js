seekr.controller('jobsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

  var url = 'http://tranquil-peak-9751.herokuapp.com/api';

  $scope.$on('$ionicView.enter', function() {
    $http.get(url + '/jobs').then(function(resp) {
      $scope.jobs = resp.data;
    }, function(err) {
      console.error('ERR', err); // err.status will contain the status code
    });
  });

  var self = $scope;

  $scope.newJob = function() {
    $http.post(url + '/jobs', {
        'title': $scope.jobTitle,
        'description': $scope.jobDescription,
        'start_date': $scope.startDate,
        'duration': $scope.duration,
        'hours': $scope.hours,
        'location': $scope.location,
        'locationmap': 'https://maps.googleapis.com/maps/api/staticmap?center=' + $scope.location + '&zoom=15&size=600x600&markers=' + $scope.location,
        'wage': $scope.wage,
        'requiredSkills': $scope.requiredSkills,
        'contactName': $scope.contactName,
        'contactEmail': $scope.contactEmail,
        'employer_id': 4
      }).success(function(data, status, headers, config) {
        console.log('data inserted succesfully');
      })
      .then(function() {
        $location.path('jobs');
      });

  };

}]);
