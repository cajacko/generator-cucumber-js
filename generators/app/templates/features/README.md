Basic structure of a step definition file.

```
// sample_step_definitions.js

var webdriver = require('selenium-webdriver')

module.exports = function() {
  this.Given(/^I have gone to the google home page$/, function (next) {
    this.driver.get('https://google.com').then(next);
  });
}
```

Common actions that need examples:

- Click on link and wait for new page
- Click on element and wait for css selector to find something
- Element has class
- Element text is ...
- Does element exist (wait)
- Click on element
- Elements all have text that is
- There are x number of elements
- Elements does not exist
- Element does not have class
- Elements fo not have a class
- There are x tabs open
- The new tab is pointint to x
- The current url is x
- We wait for x seconds
- Type keys into input

Running from the command line:
```
// Run all cucumber tests
npm run cucumber
```
