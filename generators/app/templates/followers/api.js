const console = require('../util/configureLogger')();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.info(`Api Process listening on ${process.env.PORT}`);
});
