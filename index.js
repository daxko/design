var glob = require('glob')
  , path = require('path')
  , metalsmith = require('metalsmith')
  , handlebars = require('handlebars')
  , markdown = require('metalsmith-markdown')
  , templates = require('metalsmith-templates')
  , _ = require('lodash');

glob('templates/helpers/**.js', function(err, files) {
  files.forEach(function(file) {
    var helperName = path.basename(file, path.extname(file));
    var filepath = path.join(__dirname, file);
    handlebars.registerHelper(helperName, require(filepath));
  });
});

function resolveLayout(files, metalsmith, done) {
  // Regex pattern for layout directive. {{!< layout }}
  var layoutPattern = /{{!<\s+([A-Za-z0-9\._\-\/]+)\s*}}/;
  _.map(files, function(file, name) {
    var template = file.contents.toString();
    var match = template.match(layoutPattern);
    if(match) {
      var layout = match[1];
      console.log(layout, template);
    }
    return file;
  });
  done();
}

function parsemd(files, metalsmith, done) {
  _.map(files, function(file, name) {
    if(name.match(/md$/)) {
      var string = file.contents.toString();
      var result = handlebars.compile(string)({});
      file.contents = new Buffer(result);
    }
    return file;
  });
  done();
}

// function defaultTemplate(files, metalsmith, done) {
//   _.map(files, function(contents, name) {
//     if(name.match(/md$/) && !contents.template) {
//       contents.template = 'page.hbs';
//     }
//     return contents;
//   });
//   done();
// }

metalsmith = metalsmith(__dirname)
  .source('contents')
  .use(parsemd)
  .use(markdown())
  .use(resolveLayout)
  .use(templates({
    engine: 'handlebars',
    directory: 'templates',
    def: 'page.hbs'
  }))
  .build(function(err) {
    if(err) throw err;
  });