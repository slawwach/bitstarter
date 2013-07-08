var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.send(fs.readFileSync("index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
