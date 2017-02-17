// var By = require('selenium-webdriver').By
// var assert = require('chai').assert
//
// exports.hasClass = function(css, targetClass, element, callback) {
//   element.driver.findElement(By.css(css)).then(function(element) {
//     element.getAttribute('class').then(function(classes) {
//       assert.include(classes, targetClass);
//       callback()
//     })
//   })
// }
//
// exports.doesNotHaveClass = function(css, targetClass, element, callback) {
//   element.driver.findElement(By.css(css)).then(function(element) {
//     element.getAttribute('class').then(function(classes) {
//       assert.notInclude(classes, targetClass);
//       callback()
//     })
//   })
// }
