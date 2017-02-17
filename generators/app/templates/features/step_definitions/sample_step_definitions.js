var webdriver = require('selenium-webdriver')

module.exports = function() {
  this.Given(/^I am on the the website$/, function (next) {
    this.driver.get('https://google.com').then(next);
  });

  this.Given(/^I navigate to the page with the sample feature on$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Given(/^I have scrolled down to the sample feature$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I interact with the feature$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^The desired result is shown$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
}
