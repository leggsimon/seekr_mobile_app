seekr.controller('signUpCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

  var url = 'http://tranquil-peak-9751.herokuapp.com/api';
  var self = $scope;

  $scope.jobseekerSignUp = function() {
    $http.post(url + '/jobseekers', {
        'title': $scope.jobTitle,
        'description': $scope.jobDescription,
        'start_date': $scope.startDate,
        'duration': $scope.duration,
        'hours': $scope.hours,
        'location': $scope.location,
        'wage': $scope.wage, }).success(function(data, status, headers, config) {
          console.log('data inserted succesfully');
        })
        .then(function() {
          $location.path('jobs');
        });

  };

  $scope.employerSignUp = function() {
    $http.post(url + '/jobs', {
        'title': $scope.jobTitle,
        'description': $scope.jobDescription,
        'start_date': $scope.startDate,
        'duration': $scope.duration,
        'hours': $scope.hours,
        'location': $scope.location,
        'wage': $scope.wage, }).success(function(data, status, headers, config) {
          console.log('data inserted succesfully');
        })
        .then(function() {
          $location.path('jobs');
        });

  };

}]);
