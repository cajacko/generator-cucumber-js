// var assert = require('assert')
//
// function elementsTextAre(elements, targetText, count, element, callback) {
//   var driver = element.driver
//
//   elements[count].getText().then(function(text) {
//     assert.equal(text, targetText)
//     count++
//
//     if (count < elements.length) {
//       elementsTextAre(elements, targetText, count, element, callback)
//     } else {
//       callback()
//     }
//   })
// }
//
// exports.run = function(elements, text, element, callback) {
//   elementsTextAre(elements, text, 0, element, callback)
// }
