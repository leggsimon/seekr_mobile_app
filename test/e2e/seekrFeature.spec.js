describe('Seekr', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Jobs');
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
      'wage': '10 pounds an hour',
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
      expect(browser.getCurrentUrl()).toContain('/jobs/new');
    });

    it("allows jobs to be created and is viewed on /jobs", function() {
      addJobButton.click();
      fillInJobFieldsHelper();
      submitButton.click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:8100/#/jobs');
      var jobs = element.all(by.repeater('job in jobs'));
      expect(jobs.last().getText()).toContain('nandos chef');
    });
  });



  // it('displays job-seekers', function() {
  //   var jobseekers = element.all(by.repeater('jobseeker in jobseekers'));
  //   expect(jobseekers.first().getText()).toEqual('Paul');
  // });

});
