exports.config = {
  capabilities: {
    // You can use other browsers
    // like firefox, phantoms, safari, IE (-_-)
    'browserName': 'chrome'
  },
  specs: [
    // We are going to make this file in a minute
    'seekrFeature.spec.js'
  ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
  },
  allScriptsTimeout: 20000,
  onPrepare: function() {
    browser.driver.get('http://localhost:3000');
    require('protractor-http-mock').config = {
      protractorConfig: 'test/e2e/conf.js' // default value: 'protractor.conf'
    };
  }
};
