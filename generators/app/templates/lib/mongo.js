const console = require('keypunch');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.info('Mongoose connection open');
});

mongoose.connection.on('error', (err) => {
  console.info('Mongoose connection error', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

const Schema = mongoose.Schema;

module.exports = {
  mongoose,
  Schema,
};
