var chalk = require('chalk');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: `${chalk.blue('Name')} of your microservice (auto prefixed w/ gambit-)`,
    default: this.appname
  },
  {
    type: 'input',
    name: 'description',
    message: `Quick ${chalk.blue('description')} of your microservice.`,
    default: this.appname
  },
  {
    type: 'confirm',
    name: 'web',
    message: `Does this app require a ${chalk.blue('web')} process?`,
    default: true
  },
  {
    type: 'confirm',
    name: 'worker',
    message: `Does this app require a ${chalk.blue('worker')} process?`,
    default: true
  },
  {
    type: 'confirm',
    name: 'rabbit',
    message: `Does this app require ${chalk.blue('Rabbit')} configured?`,
    default: true
  },
  {
    type: 'confirm',
    name: 'mongo',
    message: `Does this app require ${chalk.blue('MongoDB')} configured?`,
    default: true
  },
  {
    type: 'list',
    name: 'puppetsloth',
    message: `Have you consulted with ${chalk.magenta.bgWhite.bold('Puppet Sloth')} on the creation of this service?`,
    choices: ['Of course!', 'We\'re having an ongoing nerd fight about it', 'Consultants are overrated']
  }
];
