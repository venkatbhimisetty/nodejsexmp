#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Hello World, installation done using anisble and jenkins\n');
}).listen(3333, 'localhost');
console.log('Server running at http://localhost:3333/');
