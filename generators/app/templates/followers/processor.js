const console = require('../util/configureLogger')();
const stathat = require('../util/stathat');

<%if (data.rabbit) { %>const rabbit = require('../lib/rabbit');

rabbit.produce('test', 'a great message').then(() => {
  rabbit.consume('test', (msg) => {
    stathat.count('Message consumed', 1);
    console.log(msg);
  });
});<% } %>
