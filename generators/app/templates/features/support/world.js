var driver = require('./driver')

function CustomWorld() {
  this.driver = driver()
}

module.exports = function() {
  this.World = CustomWorld;
};
