var mock = require('protractor-http-mock');

describe('Seekr', function() {

  var jobs = element.all(by.repeater('job in jobs'));


  beforeEach(function() {
    mock([{
      request: {
        path: 'http://tranquil-peak-9751.herokuapp.com/api/jobs',
        method: 'GET'
      },
      response: {
        data: [{
          id: 1,
          title: "nandos chef",
          description: "cooking chicken that is extra cheeky",
          start_date: "2015-09-16",
          duration: "3 months",
          hours: "40",
          location: "London",
          wage: "10.0"
        }]
      }
    },
    {
      request: {
        path: 'http://tranquil-peak-9751.herokuapp.com/api/jobs',
        method: 'POST'
      },
      response: {
        status: 200
      }
    }]);

    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Home');
  });

  describe('Users', function () {

    it('can sign in as a jobseeker', function () {
      element(by.id('jobseekerSignUp')).click();
      element(by.id('jobseekerSignUpSubmit')).click();
      expect(browser.getTitle()).toEqual("Job offers");
    });

    it('can sign in as an employer', function () {
      element(by.id('employerSignUp')).click();
      element(by.id('employerSignUpSubmit')).click();
      expect(browser.getTitle()).toEqual("Jobs");
    });

  });

  describe('Creating jobs', function() {

    var addJobButton = element(by.id('addJob'));
    var submitButton = element(by.id('addJobSubmit'));
    var jobFieldValues = {
      'jobTitle': 'nandos chef',
      'jobDescription': 'cooking chicken that is extra cheeky',
      'startDate': '16/9/2015',
      'duration': '3 months',
      'hours': '40',
      'location': 'London',
      'wage': '10',
      'requiredSkills': 'cooking'
    };

    var fillInJobFieldsHelper = function() {
      for (var inputField in jobFieldValues) {
        if (jobFieldValues.hasOwnProperty(inputField)) {
          element(by.model(inputField)).sendKeys(jobFieldValues[inputField]);
        }
      }
    };

    it("has an 'add job' button", function() {
      element(by.id('employerSignUp')).click();
      element(by.id('employerSignUpSubmit')).click();
      addJobButton.click();
      expect(browser.getCurrentUrl()).toContain('/job/new');
    });

    it("allows jobs to be created and is viewed on /jobs", function() {
      element(by.id('employerSignUp')).click();
      element(by.id('employerSignUpSubmit')).click();
      addJobButton.click();
      fillInJobFieldsHelper();
      submitButton.click();
      expect(mock.requestsMade()).toEqual([ { method : 'GET', url : 'http://tranquil-peak-9751.herokuapp.com/api/jobs' }, { method : 'GET', url : 'http://tranquil-peak-9751.herokuapp.com/api/jobs' }, { method : 'GET', url : 'http://tranquil-peak-9751.herokuapp.com/api/jobs' }, { method : 'GET', url : 'http://tranquil-peak-9751.herokuapp.com/api/jobs' }, { data : { duration : '3 months', hours : '40', description : 'cooking chicken that is extra cheeky', location : 'London', title : 'nandos chef', start_date : '16/9/2015', wage : '10' }, method : 'POST', url : 'http://tranquil-peak-9751.herokuapp.com/api/jobs' } ]);
      expect(browser.getCurrentUrl()).toBe('http://localhost:8100/#/jobs');
      expect(jobs.last().getText()).toContain('nandos chef');
    });
  });

  describe('Viewing more info on a job', function() {
    it("shows a job's extra information", function() {
      element(by.id('employerSignUp')).click();
      element(by.id('employerSignUpSubmit')).click();
      jobs.last().click();
      expect(browser.getTitle()).toEqual('More Info');
    });
  });

  describe('Viewing candidates', function() {
    it('displays job-seekers', function() {
      element(by.id('employerSignUp')).click();
      element(by.id('employerSignUpSubmit')).click();
      jobs.last().click();
      element(by.id('viewCandidates')).click();
      var jobseekers = element.all(by.repeater('jobseeker in jobseekers'));
      expect(browser.getTitle()).toEqual('Candidates');
      expect(jobseekers.first().getText()).toEqual('Paul');
    });
  });

});
