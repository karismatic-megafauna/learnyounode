var fs = require('fs');
var path = require('path');

module.exports = function(dirName, desiredExt, callBack) {
  fs.readdir(dirName, function(err, dirs) {
    if(err) { 
      callBack(err); 
    }
    dirs = dirs.filter(function(dir) {
      return path.extname(dir) === '.' + desiredExt;
    });
    callBack( null , dirs);
  });
}
