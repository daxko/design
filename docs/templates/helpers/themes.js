var fs = require('fs')
  , path = require('path');

module.exports = function(opts) {
  var themes = fs.readdirSync(path.join(__dirname, '../../contents/css/themes'))
    , result = '';

  themes.map(theme => {
    result += opts.fn({
      theme: theme,
      name: theme.match(/theme-(.*).css/i)[1].split('-').join(' ')
        .replace(/(?:\b[a-z])/g, letter => letter.toUpperCase())
        .replace(/ymca/i, 'YMCA')
        .replace(/ywca/i, 'YWCA')
        .replace(/jcc/i, 'JCC')
    });
  });

  return result;
};