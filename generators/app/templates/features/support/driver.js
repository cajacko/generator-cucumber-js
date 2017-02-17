require('chromedriver')
require('phantomjs-prebuilt')
var webdriver = require('selenium-webdriver')

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  // .forBrowser('phantomjs')
  .build()

module.exports = (() => driver)
