var webdriver = require('selenium-webdriver')

module.exports = function() {
  this.Given(/^I am on the the website$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
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

// Click on link and wait for new page
// Click on element and wait for css selector to find something
// Element has class
// Element text is ...
// Does element exist (wait)
// Click on element
// Elements all have text that is
// There are x number of elements
// Elements does not exist
// Element does not have class
// Elements fo not have a class
// There are x tabs open
// The new tab is pointint to x
// The current url is x
// We wait for x seconds
// Type keys into input
