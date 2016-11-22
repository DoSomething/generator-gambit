const console = require('keypunch');

let connection = {};

function makeConnection() {
  console.info('Attempting amqp connection');
  connection = require('amqplib').connect(process.env.RABBIT_URI);
}
makeConnection();

function onError(err) {
  console.error('Rabbit Error', err);
  setTimeout(makeConnection, 2000);
}

function onMessage(channel, message, callback) {
  if (message !== null) {
    callback(message.content.toString());
    channel.ack(message);
  }
}

module.exports = {
  consume(queueName, callback) {
    connection
    .then(conn => conn.createChannel())
    .then((channel) => {
      channel.assertQueue(queueName).then(() => channel.consume(queueName, (message) => {
        onMessage(channel, message, callback);
      }));
    })
    .catch(onError);
  },

  produce(queueName, message) {
    return connection
    .then(conn => conn.createChannel())
    .then((channel) => channel.assertQueue(queueName)
      .then(() => channel.sendToQueue(queueName, new Buffer(message)))
    )
    .catch(onError);
  },
};
