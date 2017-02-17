// var webdriver = require('selenium-webdriver')
// var By = webdriver.By
// var until = webdriver.until
// var home = require('../support/config').url
// var assert = require('assert')
//
// function clickThrough(cssArray, count, element, callback) {
//   var driver = element.driver
//
//   driver.wait(until.elementLocated(By.css(cssArray[count].click))).click().then(function() {
//     driver.wait(until.elementLocated(By.css(cssArray[count].waitFor)), 10000).then(function() {
//       count++
//
//       if (count < cssArray.length) {
//         clickThrough(cssArray, count, element, callback)
//       } else {
//         callback()
//       }
//     })
//   })
// }
//
// exports.run = function(cssArray, element, callback) {
//   clickThrough(cssArray, 0, element, callback)
// }
