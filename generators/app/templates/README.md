# Functional Testing

Functional testing is implemented with Cucumber JS. To run the tests run:
```
npm run cucumber
```
You can run the entire test suite by running:
```
npm test
```
Check out more of the commands on the [cucumber js github page](https://github.com/cucumber/cucumber-js).
All the functional tests live within the features directory. In here each .feature file specifies your functional tests. The support directory holds helper files and scripts that initiate Selenium web driver. The step_definitions directory contains all the code that actually interacts with Selenium web driver.
