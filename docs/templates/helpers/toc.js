var cheerio = require('cheerio');

/*
 * Automagically create a table of contents based on h2s and h3s with ids
 */

module.exports = function(context) {
  var $ = cheerio.load(context)
    , sections = $('h2,h3').filter('[id]')
    , content = '';

  sections.each(function(i) {
    el = $(this);

    // Only allow h2 as top-level elements
    if(el.is('h3')) return;

    // Determine if there's any h3s that show up before the next h2
    var subsection = '';
    if(sections.eq(i + 1).is('h3')) {
      var subElements = el.nextUntil('h2[id]').filter('h3[id]');

      subsection += '<ul>';
      subElements.each(function() {
        var that = $(this);
        subsection += '<li><a href="#' + that.attr('id') + '">' + that.text() + '</a>';
      });
      subsection += '</ul>';
    }

    content += '<li><a href="#' + el.attr('id') + '">' + el.text() + '</a>' + subsection + '</li>';
  });

  return '<ul class="nav section-nav tabs tabs-vertical">' + content + '</ul>';
};