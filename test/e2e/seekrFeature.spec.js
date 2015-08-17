describe('Seekr', function() {

  var jobs = element.all(by.repeater('job in jobs'));


  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Home');
  });

  describe('Users', function () {

    var employerSignUpValues = {
      'companyName': 'Nandos',
      'companyDescription': 'Selling extra cheeky chicken.',
      'industry': 'Food',
      'website': 'http://www.nandos.co.uk/'
    };

    var fillInEmployerSignUpHelper = function() {
      for (var inputField in employerSignUpValues) {
        if (employerSignUpValues.hasOwnProperty(inputField)) {
          element(by.model(inputField)).sendKeys(employerSignUpValues[inputField]);
        }
      }
    };

    it('can signup as an employer', function () {
      element(by.id('signUp')).click();
      element(by.model('userEmail')).sendKeys('example@nandos.com');
      element(by.model('userPassword')).sendKeys('cheeky123');
      element(by.id('employerSignUp')).click();
      // fillInEmployerSignUpHelper;
      element(by.model('companyName')).sendKeys('Nandos');
      element(by.model('companyDescription')).sendKeys('Selling extra cheeky chicken.');
      element(by.model('industry')).sendKeys('food');
      element(by.model('website')).sendKeys('http://www.nandos.co.uk');
      expect(element(by.id('addJob')).getText()).toEqual('Add New Job');
    });
  });

  describe('Creating jobs', function () {

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
      addJobButton.click();
      expect(browser.getCurrentUrl()).toContain('/job/new');
    });

    it("allows job fields to be filled in", function() {
      addJobButton.click();
      fillInJobFieldsHelper();
      expect(browser.getTitle()).toEqual('newJob');
    });

    it("creating a job has a submit button", function() {
      addJobButton.click();
      expect(element(by.id('addJobSubmit')).getText()).toEqual('Add Job');
    });

  });

  describe('Viewing more info on a job', function() {
    it("shows a job's extra information", function () {
      jobs.last().click();
      expect(browser.getTitle()).toEqual('More Info');
    });
  });

  describe('Viewing candidates', function() {
    it('displays job-seekers', function() {
      jobs.last().click();
      element(by.id('viewCandidates')).click();
      expect(browser.getTitle()).toEqual('Candidates');
    });
  });

});
