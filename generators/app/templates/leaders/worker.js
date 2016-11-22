const console = require('keypunch');
console.info('Worker Process starting...');

const forky = require('forky');
forky({
  path: `${__dirname}/../followers/processor.js`,
  workers: process.env.FORKY_CORES || require('os').cpus().length,
  enable_logging: process.env.FORKY_LOGGING === 'true',
});
