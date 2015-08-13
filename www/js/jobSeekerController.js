seekr.controller('jobSeekerCtrl', function($scope, $http) {

  $http.get('http://pacific-everglades-2252.herokuapp.com/api/jobs').then(function(resp) {
    $scope.jobs = resp.data;
    }, function(err) {
      console.error('ERR', err); // err.status will contain the status code
  });

  $scope.newJob = function() {
    $http.post("http://pacific-everglades-2252.herokuapp.com/api/jobs", {
        'title': $scope.jobTitle,
        'description': $scope.jobDescription,
        'start_date': $scope.startDate,
        'duration': $scope.duration,
        'hours': $scope.hours,
        'location': $scope.location,
        'wage': $scope.wage, }).success(function(data, status, headers, config) {          
          console.log('data inserted succesfully');
        });
  };



});
