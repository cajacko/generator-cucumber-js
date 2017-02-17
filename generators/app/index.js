var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag

    // this.config.save(); // Creates .yo-rc.json
  }

  // Promptins is a method keyname that puts this function into the special queue
  // prompting() {
  //   return this.prompt([{
  //     type    : 'input',
  //     name    : 'name',
  //     message : 'Your project name',
  //     default : this.appname, // Default to current folder name
  //     store   : true // Store will make the default value be the last value a user entered when they ran this generator last
  //   }, {
  //     type    : 'confirm',
  //     name    : 'cool',
  //     message : 'Would you like to enable the Cool feature?'
  //   }]).then((answers) => {
  //     this.log('app name', answers.name);
  //     this.log('cool feature', answers.cool);
  //   });
  // }

  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  _private_method() {
    console.log('private hey');
  }

  _asyncTask() {
    var done = this.async();

    getUserEmail(function (err, name) {
      done(err);
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*.js'),
      this.destinationPath('public/'),
      { title: 'Templating with Yeoman' }
    );
  }

  // end() {
  //   this.npmInstall()
  // }
};
