const webdriver = require('selenium-webdriver');
const until = webdriver.until;
const By = webdriver.By;
const assert = require('assert');

module.exports = function() {
  this.Given(/^I am on the test website$/, function (done) {
    const website = `http://localhost:${process.env.npm_package_config_port}`;
    const started = this.driver.get(website);
    this.driver.wait(started, 5000).then(done);
  });

  this.When(/^I click on an element by css "([^"]*)"$/, function (css, done) {
    this.driver.wait(until.elementLocated(By.css(css)), 1000)
      .click()
      .then(done);
  });

  this.Then(/^the page title should be "([^"]*)"$/, function (titleMatch, done) {
    this.driver.getTitle()
      .then(function(title) {
        assert.equal(title, titleMatch);
        done();
      });
  });
}
