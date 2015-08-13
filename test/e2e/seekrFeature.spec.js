describe('Seekr', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Seekr');
  });

  it('displays job-seekers', function() {
    var jobseekers = element.all(by.repeater('jobseeker in jobseekers'));
    expect(jobseekers.last().getText()).toEqual('Rob');
  });

});
