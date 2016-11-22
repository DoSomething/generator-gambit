# generator-gambit [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Scaffolding for new Gambit services

## Installation

First, install [Yeoman](http://yeoman.io) and generator-gambit using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @dosomething/generator-gambit
```

Then generate your new project:

```bash
mkdir gambit-microservice
cd gambit-microservice
yo gambit
```

## Local Development

In order to work on this generator you'll need to link this repo locally.

```bash
npm link
```

When making changes please make sure to evaluate the files & templates render correctly.
In addition,
1. Verify docker-compose up still runs correctly
2. Verify eslint passes

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [DoSomething.org]()


[npm-image]: https://badge.fury.io/js/%40dosomething%2Fgenerator-gambit.svg
[npm-url]: https://www.npmjs.com/package/@dosomething/generator-gambit
[daviddm-image]: https://david-dm.org/dosomething/generator-gambit.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dosomething/generator-gambit
