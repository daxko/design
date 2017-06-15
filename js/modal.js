(function($) {
  'use strict';

  // Modal
  // --------

  var backdrop    = '.modal-backdrop'
    , toggle      = '[data-toggle=modal]'
    , dismiss     = '[data-dismiss=modal]'
    , classes     = { open: 'modal--open', active: 'modal-active' }
    , Modal = function(element) {
        var that = this;
        that.isShown  = false;
        that.$element = $(element);
        that.$modal   = that.$element.find('.modal');
        that.$body    = $(document.body);

        if(!that.$modal.length) {
          that.$modal = that.$element;
        }
      };

  Modal.prototype = {

    toggle: function(relatedTarget) {
      return this.isShown ? this.hide() : this.show(relatedTarget);
    },

    show: function(relatedTarget) {
      var that = this
        , $modal = that.$modal
        , focusedElement = $(':focus')
        , e;

      $modal.trigger(e = $.Event('show', { relatedTarget: relatedTarget }));
      if(that.isShown || e.isDefaultPrevented()) {
        return;
      }

      that.isShown = true;

      $('<div>')
        .addClass(backdrop.replace('.', ''))
        .on('click.modal', that.hide.bind(that))
        .appendTo(that.$body.addClass(classes.active));

      $modal
        .addClass(classes.open)
        .attr('aria-hidden', 'false')
        .attr('tabindex', $modal.attr('tabindex') || '-1')
        .on('click.modal', dismiss, that.hide.bind(that))
        .on('keydown.modal', that.escape.bind(that))
        .one('hidden', function() { $(focusedElement).trigger('focus'); })
        .trigger('focus')
        .trigger('shown');
    },

    hide: function(e) {
      var that = this;

      if(e) {
        e.preventDefault();
      }

      that.$modal.trigger(e = $.Event('hide'));
      if(!that.isShown || e.isDefaultPrevented()) {
        return;
      }

      that.isShown = false;

      that.$body
        .removeClass(classes.active)
        .children(backdrop)
        .off('click.modal')
        .remove();

      that.$modal
        .removeClass(classes.open)
        .attr('aria-hidden', 'true')
        .off('click.modal')
        .trigger('hidden');
    },

    escape: function(e) {
      if(this.isShown && e) {
        if(e.which === 27) {
          this.hide();
        }
      }
    }

  };

  // Modal Plugin
  // ------------

  function Plugin(option, relatedTarget) {
    return this.each(function() {
      var $this = $(this)
        , data = $this.data('modal');

      if(!data) {
        $this.data('modal', (data = new Modal(this)));
      }

      if(typeof option === 'string') {
        data[option](relatedTarget);
      }
    });
  }

  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;

  $(document).on('click.modal', toggle, function(e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || href);

    if($this.is('a')) {
      e.preventDefault();
    }

    Plugin.call($target, 'toggle', this);
  });

})(jQuery);