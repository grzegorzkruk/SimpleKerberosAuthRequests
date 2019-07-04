var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get(/^(.+)$/, function(req, res) {
  console.log('static file request : ' + req.params);
  res.sendFile(__dirname + req.params[0]);
});

app.listen(port, function() {
  console.log('Listening on ' + port);
});