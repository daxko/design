var glob = require('glob')
  , path = require('path')
  , metalsmith = require('metalsmith')
  , handlebars = require('handlebars')
  , hljs = require('highlight.js')
  , markdown = require('metalsmith-markdown')
  , templates = require('metalsmith-templates')
  , layouts = require('metalsmith-layouts')
  , _ = require('lodash');

glob('templates/helpers/**.js', function(err, files) {
  files.forEach(function(file) {
    var helperName = path.basename(file, path.extname(file));
    var filepath = path.join(__dirname, file);
    handlebars.registerHelper(helperName, require(filepath));
  });
});

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

// No prefixed highlight classes
hljs.configure({ classPrefix: '' });

metalsmith = metalsmith(__dirname)
  .source('contents')
  .use(parsemd)
  .use(markdown({
    highlight: function(code, lang, fn) {
      if(!lang) {
        return hljs.highlight(lang).value;
      } else {
        return hljs.highlight(lang, code).value;
      }
    }
  }))
  .use(templates({
    engine: 'handlebars',
    directory: 'templates',
    def: 'page.hbs'
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: 'templates',
    default: 'layout.hbs',
    pattern: '**/*.html'
  }))
  .build(function(err) {
    if(err) throw err;
  });