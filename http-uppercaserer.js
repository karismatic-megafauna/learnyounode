'use strict'
let http = require('http');
let map = require('through2-map');

let server = http.createServer(function (req, res) {
  // check and see if is not a POST
  if (req.method != 'POST'){
    return res.end('use POST \n');
  }

  // do the transforms using through2

});

server.listen(Number(process.argv[2]));
