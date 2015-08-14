describe('Seekr', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Jobs');
  });

  describe('Creating jobs', function () {

    var addJobButton = element(by.id('addJob'));

    var jobTitleForm = element(by.model('jobTitle'));
    var jobDescriptionForm = element(by.model('jobDescription'));
    var startDateForm = element(by.model('startDate'));
    var durationForm = element(by.model('duration'));
    var hoursForm = element(by.model('hours'));
    var locationForm = element(by.model('location'));
    var wageForm = element(by.model('wage'));
    var requiredSkillsForm = element(by.model('requiredSkills'));
    var submitButton = element(by.id('addJobSubmit'));

    var fillInJobFieldsHelper = function() {
      jobTitleForm.sendKeys('nandos chef');
      jobDescriptionForm.sendKeys('cooking chicken that is extra cheeky');
      startDateForm.sendKeys('16/9/2015');
      durationForm.sendKeys('3 months');
      hoursForm.sendKeys('40');
      locationForm.sendKeys('London');
      wageForm.sendKeys('10 pounds an hour');
      requiredSkillsForm.sendKeys('cooking');
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
