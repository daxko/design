(function($) {
  'use strict';

  // Dropdown
  // --------

  var backdrop = '.dropdown-backdrop'
    , toggle   = '[data-toggle=dropdown]'
    , Dropdown = function(element) {
        $(element).on('click.dropdown', this.toggle);
      };

  function getParent($this) {
    var selector = $this.attr('data-target');

    if(!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = selector && $(selector);
    return $parent && $parent.length ? $parent : $this.parent();
  }

  function closeMenus(e) {
    $(backdrop).remove();
    $('body').removeClass('dropdown-active');
    $(toggle).each(function() {
      var $this = $(this)
        , $parent = getParent($this)
        , relatedTarget = { relatedTarget: this };

      if(!$parent.hasClass('open')) return;

      $parent.trigger(e = $.Event('hide', relatedTarget));

      if(e.isDefaultPrevented()) return;

      $this.attr('aria-expanded', 'false');
      $parent
        .removeClass('open')
        .trigger('hidden', relatedTarget);
    });
  }

  function dropUp() {
    /* jshint validthis: true */
    var $this = $(this)
      , $menu = $this.find('.dropdown-menu')
      , offset = $menu.offset().top
      , height = $menu.outerHeight();
    $this.toggleClass('dropup', (offset + height) > (window.innerHeight + $(window).scrollTop()));
  }

  Dropdown.prototype.toggle = function(e) {
    var $this = $(this)
      , $parent
      , active;

    if($this.is(':disabled,.disabled')) return;

    $parent = getParent($this);
    active = $parent.hasClass('open');

    e.preventDefault();

    closeMenus();

    if(!active) {
      var relatedTarget = { relatedTarget: this };

      $parent.trigger(e = $.Event('show', relatedTarget));

      if(e.isDefaultPrevented()) return;

      $('body')
        .addClass('dropdown-active')
        .append($('<div>').addClass(backdrop.replace('.', '')));

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true');

      $parent
        .toggleClass('open')
        .trigger('shown', relatedTarget);
    }
  };

  Dropdown.prototype.keydown = function(e) {
    var $this = $(this)
      , $parent
      , active;

    var keycode = [
      38, // up arrow
      40, // down arrow
      27, // esc
      32, // space
    ].indexOf(e.which);

    if(keycode === -1) return;

    e.preventDefault();
    e.stopPropagation();

    if($this.is('.disabled,:disabled')) return;

    $parent = getParent($this);
    active = $parent.hasClass('open');

    if(!active && e.which !== 27 || active && e.which === 27) {
      $parent.find(toggle).trigger('click').trigger('focus');
    }

    var $items = $parent.find('.dropdown-menu li:not(.disabled):visible a')
      , index = $items.index(e.target);

    if(!$items.length) return;

    if(e.which === 38 && index > 0)                 index--; // up
    if(e.which === 40 && index < $items.length - 1) index++; // down
    if(index === -1)                                index = 0;

    $items.eq(index).trigger('focus');
  };

  // Dropdown Plugin
  // ---------------

  function Plugin(option) {
    return this.each(function() {
      var $this = $(this)
        , data = $this.data('dropdown');

      if(!data) $this.data('dropdown', (data = new Dropdown(this)));
      if(typeof option === 'string') data[option].call($this);
    });
  }

  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown;

  // Attach Dropdown to Data API
  // ---------------------------

  $(document)
    .on('click.dropdown', backdrop, closeMenus)
    .on('click.dropdown', '.dropdown-menu', closeMenus)
    .on('click.dropdown', toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown', toggle, Dropdown.prototype.keydown)
    .on('keydown.dropdown', '.dropdown-menu', Dropdown.prototype.keydown)
    .on('show.dropdown', '.dropdown', function() { $(this).removeClass('dropup'); })
    .on('shown.dropdown', '.dropdown', dropUp);

})(jQuery);