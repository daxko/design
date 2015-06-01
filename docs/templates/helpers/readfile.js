var fs = require('fs')
  , path = require('path');

module.exports = function(filename, context) {
  return fs.readFileSync(path.join(__dirname, '../../../', filename));
};