const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.port || 3000;

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, function() {
  console.log(`listening on port ${3000}!`);
});
