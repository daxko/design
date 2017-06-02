(function($) {

  'use strict';

  function matcher(value) {
    // Fetch the remote values and store them
    var values = [];
    $.getJSON(value, function(results) {
      values = results.results;
    });

    return function findMatches(query, callback) {
      var matches = []
        , regex = new RegExp(query.replace(/[\\\/\^\$\*\+\.\?\(\)\[\]\{\}]/g, '\\$&'), 'i');

      matches =
        values
          .filter(function(value) {
            if(value.tokens) {
              return value.tokens.filter(function(token) {
                return regex.test(token);
              }).length;
            } else {
              return regex.test(value);
            }
          })
          .sort(function(a, b) {
            return a.display.localeCompare(b.display);
          });

      callback(matches);
    };
  }

  $(document)
    .on('focus keyup', '[data-trigger=typeahead]:not(.has-typeahead)', function(e) {
      var $this = $(this).addClass('has-typeahead');
      $this.typeahead({
        minLength: 1,
        highlight: true,
        classNames: {
          input: 'typeahead-input',
          menu: 'typeahead-menu',
          hint: 'typeahead-hint',
          selectable: 'typeahead-selectable',
          suggestion: 'typeahead-suggestion',
          cursor: 'selected',
          open: 'open',
          wrapper: 'typeahead'
        }
      },
      {
        name: $this.attr('name') || 'value',
        displayKey: 'display',
        valueKey: 'id',
        templates: {
          suggestion: function(result) {
            return '<div>' + (result.suggestion || result.display) + '</div>';
          }
        },
        limit: Infinity,
        source: matcher($this.data('fetch'))
      });

      // Input focus is lost if typeahead created from keyup event
      if(e.type === 'keyup') {
        $this.focus();
      }

      $this.typeahead('open');
    })
    .on('typeahead:select', '.typeahead-input', function(e, value) {
      $(this).parent().next('input:hidden').val(value.id);
    })
    .on('typeahead:render', '.typeahead-input', function() {
      $(this).prev().removeAttr('data-reactid'); // prevent invariant violation with react
      $(this).parent().find('.typeahead-selectable:first').addClass('selected');
    });

})(jQuery);