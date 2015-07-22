'use strict';

var glob = require('glob')
  , path = require('path')
  , fs = require('fs')
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

function includePackageMetadata(files, metalsmith, done) {
  var metadata = metalsmith.metadata()
    , pkg = fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8');

  metadata.pkg = JSON.parse(pkg);

  done();
}

// No prefixed highlight classes
hljs.configure({ classPrefix: '' });

metalsmith = metalsmith(__dirname)
  .source('contents')
  .use(includePackageMetadata)
  .use(parsemd)
  .use(markdown({
    smartypants: true,
    highlight: function(code, lang) {
      if(!lang) {
        return hljs.highlightAuto(code).value;
      } else {
        return hljs.highlight(lang, code).value;
      }
    }
  }))
  .use(templates({
    engine: 'handlebars',
    directory: 'templates',
    default: 'page.hbs',
    pattern: '**/*.html'
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: 'templates',
    default: 'layout.hbs',
    pattern: '**/*.html'
  }))
  .build(function(err) {
    if(err) {
      throw err;
    }
  });