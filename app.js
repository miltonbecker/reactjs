'use strict';

let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/bundles', express.static(__dirname + '/bundles'));

app.use('/api', express.static(__dirname + '/api'));

app.listen(8080, function() {
  console.log('Listening on port %d', 8080);
});
