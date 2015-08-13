describe('Seekr', function() {

  var addJobButton = element(by.id('addJob'));


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

  // it('displays job-seekers', function() {
  //   var jobseekers = element.all(by.repeater('jobseeker in jobseekers'));
  //   expect(jobseekers.first().getText()).toEqual('Paul');
  // });

});
