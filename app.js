var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World - Yaniv You made it !');
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;

app.listen(port);