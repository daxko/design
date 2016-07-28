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
  , ignore = require('metalsmith-ignore')
  , _ = require('lodash');

glob('templates/helpers/**.js', function(err, files) {
  files.forEach(function(file) {
    var helperName = path.basename(file, path.extname(file));
    var filepath = path.join(__dirname, file);
    handlebars.registerHelper(helperName, require(filepath));
  });
});

function includePackageMetadata(files, metalsmith, done) {
  var metadata = metalsmith.metadata()
    , pkg = fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8');

  metadata.pkg = JSON.parse(pkg);

  done();
}

function concatFiles(files, metalsmith, done) {
  setImmediate(done);

  var regex = /((.*)\d{2}-)[^\/]+.md$/i
    , concatinatedFiles = [];

  concatinatedFiles = _.chain(files)
    .pick(function(file, name) {
      return regex.test(name);
    })
    .groupBy(function(file, name) {
      file._name = name;
      return regex.exec(name)[2];
    })
    .map(function(group) {
      group = group.sort(function(a, b) { return a._name.toLowerCase().localeCompare(b._name.toLowerCase()); });
      return _.reduce(group, function(accumulator, file) {
        accumulator.contents = new Buffer([accumulator.contents.toString(), file.contents.toString()].join('\n\n'));
        return accumulator;
      });
    })
    .value();

  concatinatedFiles.forEach(function(file) {
    files[file._name.replace(/\d{2}-/, '')] = file;
  });
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

function defaultStylesheet(files, metalsmith, done) {
  _.map(files, function(file) {
    if(!file.stylesheet) {
      file.stylesheet = '/css/styleguide.css';
    }
    return file;
  });
  done();
}

// No prefixed highlight classes
hljs.configure({ classPrefix: '' });

metalsmith = metalsmith(__dirname)
  .source('contents')
  .use(includePackageMetadata)
  .use(concatFiles)
  .use(ignore('**/[0-9][0-9]-*.md'))
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
  .use(defaultStylesheet)
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