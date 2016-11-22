const console = require('keypunch');

module.exports = () => {
  console.logLevel = process.env.LOG_LEVEL || 0;
  console.addHeaderFunction(() => `[pid:${process.pid}]`);
  return console;
};
