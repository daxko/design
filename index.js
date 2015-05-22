var glob = require('glob')
  , path = require('path')
  , metalsmith = require('metalsmith')
  , handlebars = require('handlebars')
  , markdown = require('metalsmith-markdown')
  , templates = require('metalsmith-templates');

glob('templates/helpers/**.js', function(err, files) {
  files.forEach(function(file) {
    var helperName = path.basename(file, path.extname(file));
    var filepath = path.join(__dirname, file);
    handlebars.registerHelper(helperName, require(filepath));
  });
});

metalsmith = metalsmith(__dirname)
  .source('contents')
  .use(templates({
    engine: 'handlebars',
    directory: 'templates'
  }))
  .use(markdown())
  .build(function(err) {
    if(err) throw err;
  });