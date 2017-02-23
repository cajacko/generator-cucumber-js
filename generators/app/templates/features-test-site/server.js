const connect = require('connect');
const serveStatic = require('serve-static');
const spawn = require('child_process').spawn;
const path = require('path');

connect().use(serveStatic(__dirname)).listen(process.env.npm_package_config_port, function(){
  const cucumber = path.join(__dirname, '/../node_modules/cucumber/bin/cucumber.js');
    console.log(`Server running on ${process.env.npm_package_config_port}...`);

    const ls = spawn('node', [cucumber]);

    ls.stdout.on('data', (data) => {
      console.log(`${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.log(`${data}`);
    });

    ls.on('close', (code) => {
      if (code) {
        throw new Error('Cucumber test failed');
      }

      process.exit();
    });
});
