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
          wage: "10.0",
          contactName: 'Steve',
          contactEmail: 'steve@nandos.com'
        }]
      }
    }, {
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

  describe('Users', function() {

    it('can sign in as a jobseeker', function() {
      element(by.id('jobseekerSignIn')).click();
      element(by.id('jobseekerSignInSubmit')).click();
      expect(browser.getTitle()).toEqual("Job Offers");
    });

    it('can sign in as an employer', function() {
      element(by.id('employerSignIn')).click();
      element(by.id('employerSignInSubmit')).click();
      expect(browser.getTitle()).toEqual("Jobs");
    });

  });

  describe('Employer actions', function() {

    beforeEach(function() {
      element(by.id('employerSignIn')).click();
      element(by.id('employerSignInSubmit')).click();
    });

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
      'requiredSkills': 'cooking',
      'contactName': 'Steve',
      'contactEmail': 'steve@nandos.com',
    };

    var fillInJobFieldsHelper = function() {
      for (var inputField in jobFieldValues) {
        if (jobFieldValues.hasOwnProperty(inputField)) {
          element(by.model(inputField)).sendKeys(jobFieldValues[inputField]);
        }
      }
    };

    it("add job button takes you to the add job page", function() {
      addJobButton.click();
      expect(browser.getCurrentUrl()).toContain('/job/new');
    });

    it("allows jobs to be created and is viewed on /jobs", function() {
      addJobButton.click();
      fillInJobFieldsHelper();
      submitButton.click();
      expect(mock.requestsMade()).toEqual([{
        url: 'http://tranquil-peak-9751.herokuapp.com/api/jobs',
        method: 'GET'
      }, {
        url: 'http://tranquil-peak-9751.herokuapp.com/api/jobs',
        method: 'GET'
      }, {
        url: 'http://tranquil-peak-9751.herokuapp.com/api/jobs',
        method: 'GET'
      }, {
        url: 'http://tranquil-peak-9751.herokuapp.com/api/jobs',
        method: 'GET'
      }, {
        data: {
          duration: '3 months',
          title: 'nandos chef',
          wage: '10',
          contactEmail: 'steve@nandos.com',
          location: 'London',
          requiredSkills: 'cooking',
          contactName: 'Steve',
          description: 'cooking chicken that is extra cheeky',
          hours: '40',
          start_date: '16/9/2015'
        },
        url: 'http://tranquil-peak-9751.herokuapp.com/api/jobs',
        method: 'POST'
      }]);
      expect(browser.getCurrentUrl()).toBe('http://localhost:8100/#/jobs');
      expect(jobs.last().getText()).toContain('nandos chef');
    });

    it("shows a job's extra information", function() {
      jobs.last().click();
      expect(browser.getTitle()).toEqual('More Info');
    });

    it('displays job-seekers', function() {
      jobs.last().click();
      expect(element(by.css('img')).isPresent()).toBe(false);
      element(by.id('viewCandidates')).click();
      expect(element(by.css('img')).isPresent()).toBe(true);
    });

  });
});
