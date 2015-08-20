seekr.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  });

  $stateProvider.state('jobseekerHome', {
    url: '/jobseekerhome',
    templateUrl: 'templates/jobseekerHome.html'
  });

  $stateProvider.state('jobOffers', {
    url: '/jobseeker/:id/offers',
    templateUrl: 'templates/jobOffers.html'
  });

  $stateProvider.state('jobseekerSignIn', {
    url: '/jobseekersignin',
    templateUrl: 'templates/jobseekerSignIn.html'
  });

  $stateProvider.state('employerSignIn', {
    url: '/employersignin',
    templateUrl: 'templates/employerSignIn.html'
  });

  $stateProvider.state('jobs', {
    url: '/jobs',
    templateUrl: 'templates/jobs.html'
  });

  $stateProvider.state('jobInfo', {
    url: '/jobs/:id',
    templateUrl: 'templates/jobInfo.html'
  });

  $stateProvider.state('jobInfo.candidates', {
    url: '/jobseekers/:requiredSkills',
    templateUrl: 'templates/jobCandidates.html'
  });

  $stateProvider.state('newJob', {
    url: '/job/new',
    templateUrl: 'templates/newJob.html'
  });

  $urlRouterProvider.otherwise('home');
});
