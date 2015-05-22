var fs = require('fs');

module.exports = function(filename, context) {
  return fs.readFileSync(filename);
};