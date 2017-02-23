const Generator = require('yeoman-generator');
const npmAddScript = require('npm-add-script');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('features/**/*'),
      this.destinationPath('features'),
      { title: 'Templating with Yeoman' }
    );
  }

  installDependencies() {
    this.npmInstall(['chai'], { 'save-dev': true });
    this.npmInstall(['chromedriver'], { 'save-dev': true });
    this.npmInstall(['cucumber@1.3.1'], { 'save-dev': true });
    this.npmInstall(['dotenv'], { 'save-dev': true });
    this.npmInstall(['phantomjs-prebuilt'], { 'save-dev': true });
    this.npmInstall(['selenium-webdriver'], { 'save-dev': true });
  }

  addLintScript() {
    const packageJsonPath = this.destinationPath('package.json');
    const packageJson = this.fs.readJSON(packageJsonPath);

    if (!packageJson) {
      return false;
    }

    if (!packageJson.scripts || !packageJson.scripts.cucumber) {
      npmAddScript({ key: 'cucumber', value: 'cucumber-js' });
    }

    if (!packageJson.scripts || !packageJson.scripts.test) {
      npmAddScript({ key: 'test', value: 'cucumber-js' });
    }

    return true;
  }
};
