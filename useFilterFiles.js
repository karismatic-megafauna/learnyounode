var filterFiles = require('./filterFiles');
var dirStart = process.argv[2];
var desiredExt = process.argv[3];

filterFiles(dirStart, desiredExt, function(err, dirs){
  if(err) {
    return console.error('There was an error:', err) 
  }
  dirs.map(function(dir){
    console.log(dir);
  });
});
