const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send({ api: true, hello: "world" })
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
