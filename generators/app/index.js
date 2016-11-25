'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  // initializing: function() {
  // },

  prompting: function () {
    this.log(yosay(
      `${chalk.magenta('DoSomething.org')}'s Gambit microservice generator.`
    ));

    const prompts = require('./prompts');

    return this.prompt(prompts).then(function (props) {
      props.name = `gambit-${props.name}`;
      this.props = props;
    }.bind(this));
  },

  // configuring: function() {
  // },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('Procfile'),
      this.destinationPath('Procfile'),
      {data: this.props}
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {data: this.props}
    );

    this.fs.copyTpl(
      this.templatePath('.env.example'),
      this.destinationPath('.env.example'),
      {data: this.props}
    );

    this.fs.copyTpl(
      this.templatePath('.env.example'),
      this.destinationPath('.env'),
      {data: this.props}
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {data: this.props}
    );

    this.fs.copyTpl(
      this.templatePath('./documentation/api.md'),
      this.destinationPath('./documentation/api.md'),
      {data: this.props}
    );

    this.fs.copyTpl(
      this.templatePath('./documentation/endpoints/some.md'),
      this.destinationPath('./documentation/endpoints/some.md'),
      {data: this.props}
    );

    this.fs.copy(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile')
    );

    this.fs.copyTpl(
      this.templatePath('docker-compose.yml'),
      this.destinationPath('docker-compose.yml'),
      {data: this.props}
    );

    this.fs.copy(
      this.templatePath('.dockerignore'),
      this.destinationPath('.dockerignore')
    );

    this.fs.copy(
      this.templatePath('.eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );

    this.fs.copy(
      this.templatePath('./util/configureLogger.js'),
      this.destinationPath('./util/configureLogger.js')
    );

    this.fs.copy(
      this.templatePath('./util/stathat.js'),
      this.destinationPath('./util/stathat.js')
    );

    this.fs.copy(
      this.templatePath('./test/example.js'),
      this.destinationPath('./test/example.js')
    );

    if (this.props.rabbit) {
      this.fs.copyTpl(
        this.templatePath('./lib/rabbit.js'),
        this.destinationPath('./lib/rabbit.js'),
        {data: this.props}
      );
    }

    if (this.props.mongo) {
      this.fs.copyTpl(
        this.templatePath('./lib/mongo.js'),
        this.destinationPath('./lib/mongo.js'),
        {data: this.props}
      );
    }

    if (this.props.web) {
      this.fs.copy(
        this.templatePath('./leaders/web.js'),
        this.destinationPath('./leaders/web.js')
      );

      this.fs.copyTpl(
        this.templatePath('./followers/api.js'),
        this.destinationPath('./followers/api.js'),
        {data: this.props}
      );
    }

    if (this.props.worker) {
      this.fs.copy(
        this.templatePath('./leaders/worker.js'),
        this.destinationPath('./leaders/worker.js')
      );

      this.fs.copyTpl(
        this.templatePath('./followers/processor.js'),
        this.destinationPath('./followers/processor.js'),
        {data: this.props}
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
