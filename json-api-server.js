'use strict'
let http = require('http');
let url = require('url');

let server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json'});
});

server.listen(Number(process.argv[2]));
