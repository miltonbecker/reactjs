var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/bundles', express.static(__dirname + '/bundles'));

app.listen(8080, function() {
  console.log('Listening on port %d', 8080);
});
