// function closeAllButLastTab(driver, callback) {
//   driver.getAllWindowHandles().then(function(windows) {
//     if (windows.length <= 1) {
//       return callback()
//     }
//
//     var lastTab = windows.length - 1
//
//     driver.switchTo().window(windows[lastTab]).then(function() {
//       driver.close().then(function() {
//         driver.switchTo().window(windows[0]).then(function() {
//           closeAllButLastTab(driver, callback)
//         })
//       })
//     })
//   })
// }
//
// exports.run = closeAllButLastTab
