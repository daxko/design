var metalsmith = require('metalsmith')
  , markdown = require('metalsmith-markdown')
  , templates = require('metalsmith-templates');

metalsmith = Metalsmith(__dirname)
  .use(templates('handlebars'))
  .build();