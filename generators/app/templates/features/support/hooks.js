// var home = require('./config').url
// // var closeAllButFirstTab = require('./closeAllButFirstTab').run
//
module.exports = function () {
//   this.Before({timeout: 60 * 1000}, function(scenario, callback) {
//     var testId = false
//     var path = false
//
//     var tags = scenario.getTags()
//
//     tags.forEach(function(tag) {
//       tag = tag.getName()
//       var parts = tag.split('=')
//
//       if (parts[0] == '@testId' && parts[1]) {
//         testId = parts[1]
//       }
//
//       if (parts[0] == '@path' && parts[1]) {
//         path = parts[1]
//       }
//     })
//
//     var url = home
//
//     if (path) {
//       url += path
//     }
//
//     if (testId) {
//       url += '?testId=' + testId
//     }
//
//     this.driver.get(url).then(function() {
//       callback()
//     })
//   })

  // this.After(function(scenario, callback) {
  //   closeAllButFirstTab(this.driver, callback)
  // })

  this.registerHandler('AfterFeatures', function (features, callback) {
    var driver = require('./driver')()

    driver.quit().then(function() {
      callback()
    })
  })
}
