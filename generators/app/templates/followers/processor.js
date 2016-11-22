const console = require('../util/configureLogger')();

<%if (data.mongo) { %>// const mongo = require('../lib/mongo');<% } %>
<%if (data.rabbit) { %>const rabbit = require('../lib/rabbit');

rabbit.produce('test', 'a great message').then(() => {
  rabbit.consume('test', (msg) => {
    console.log(msg);
  });
});<% } %>
