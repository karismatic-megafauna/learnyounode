'use strict'
let bl = require('bl');
let http = require('http');
let url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');
  res.pipe(bl(function (err,data) {
    if (err) { return console.error(err) }
    data = data.toString();
    var char = data.split('').map(function(char){
      return char; 
    });
    console.log(char.length);
    console.log(data);
  }));
})
