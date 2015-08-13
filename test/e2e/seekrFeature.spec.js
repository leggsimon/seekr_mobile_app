describe('Seekr', function() {

  var addJobButton = element(by.id('addJob'));

  var jobTitleForm = element(by.id('jobTitle'));
  var jobDescriptionForm = element(by.id('jobDescription'));
  var startDateForm = element(by.id('startDate'));
  var durationForm = element(by.id('duration'));
  var locationForm = element(by.id('location'));
  var wageForm = element(by.id('wage'));
  var requiredSkillsForm = element(by.id('requiredSkills'));

  var submitButton = element(by.id('submit'));


  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Jobs');
  });

  it("has an 'add job' button", function() {
    addJobButton.click();
    expect(browser.getCurrentUrl()).toContain('/jobs/new');
  });

  it("allows jobs to be created", function() {
    addJobButton.click();
    jobTitleForm.sendKeys('nandos chef');
    jobDescriptionForm.sendKeys('cooking chicken that is extra cheeky');
    startDateForm.sendKeys('16/9/2015');
    durationForm.sendKeys('3 months');
    locationForm.sendKeys('London');
    wageForm.sendKeys('10 pounds an hour');
    requiredSkillsForm.sendKeys('cooking');
    submitButton.click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:8100/#/jobs');
    var jobs = element.all(by.repeater('job in jobs'));
    expect(jobs.first().getText()).toContain('nandos chef');
  });

  // it('displays job-seekers', function() {
  //   var jobseekers = element.all(by.repeater('jobseeker in jobseekers'));
  //   expect(jobseekers.first().getText()).toEqual('Paul');
  // });

});
