var express = require('express');
var fs = require('fs');
var indexfile = "index.html";
var buffer = fs.readFileSync(indexfile);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('ascii'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
