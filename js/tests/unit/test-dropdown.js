(function() {
  'use strict';

  describe('dropdown', function() {

    var dropdownHtml =
        '<div class="dropdown">'
      + '<a href="#" data-toggle="dropdown" aria-expanded="false">Dropdown</a>'
      + '<ul class="dropdown-menu">'
      + '<li><a class="dropdown-menu-item" href="#">A Link</a></li>'
      + '<li><a class="dropdown-menu-item" href="#">Another Link</a></li>'
      + '<li><a class="dropdown-menu-item" href="#">A Link to the Past</a></li>'
      + '<li class="divider"></li>'
      + '<li><a class="dropdown-menu-item" href="#">Yet another link</a></li>'
      + '</div>';

    beforeEach(function() {
      $fixture.html(dropdownHtml);
    });

    afterEach(function() {
      $('body').removeClass('dropdown-active');
    });

    after(function() {
      $fixture.empty();
    });

    it('should create dropdown plugin', function() {
      assert.ok($.fn.dropdown, 'dropdown plugin exists');
    });

    it('should not open dropdown with disabled attribute', function() {
      var $dropdown = $('[data-toggle=dropdown]').attr('disabled', true).trigger('click');
      assert.ok($dropdown.parent('.dropdown').hasClass('open'), 'dropdown does not have open class');
    });

    it('should not open dropdown with disabled class', function() {
      var $dropdown = $('[data-toggle=dropdown]').addClass('.disabled').trigger('click');
      assert.ok($dropdown.parent('.dropdown').hasClass('open'), 'dropdown does not have open class');
    });

    it('should set aria-expanded="true" when dropdown menu is shown', function() {
      var $dropdown = $('[data-toggle=dropdown]').trigger('click');
      assert.equal($dropdown.attr('aria-expanded'), 'true', 'has aria-expanded="true" attribute');
    });

    it('should set aria-expanded="false" when dropdown menu is hidden', function() {
      var $dropdown = $('.dropdown').addClass('open').find('[data-toggle=dropdown]').attr('aria-expanded', 'true').trigger('click');
      assert.equal($dropdown.attr('aria-expanded'), 'false', 'has aria-expanded="false" attribute');
    });

    it('should add open class to dropdown when opened', function() {
      var $dropdown = $('[data-toggle=dropdown]').trigger('click');
      assert.isTrue($dropdown.parent('.dropdown').hasClass('open'), 'has open class');
    });

    it('should remove open class when closed', function() {
      var $dropdown = $('.dropdown').addClass('open').find('[data-toggle=dropdown]').trigger('click');
      assert.isFalse($dropdown.parent('.dropdown').hasClass('open'), 'does not have open class');
    });

    it('should append dropdown-backdrop to body element when open', function() {
      $('[data-toggle=dropdown]').trigger('click');
      assert.equal($('body').find('.dropdown-backdrop').length, 1, 'has dropdown-backdrop element');
    });

    it('should remove dropdown-backdrop from body element when hidden', function() {
      $('body').append('<div class="dropdown-backdrop />');
      $('.dropdown').addClass('open').find('[data-toggle=dropdown]').trigger('click');
      assert.equal($('body').find('.dropdown-backdrop').length, 0, 'does not have dropdown-backdrop element');
    });

    it('should add dropdown-active class to body when clicked', function() {
      $('[data-toggle=dropdown]').trigger('click');
      assert.isTrue($('body').hasClass('dropdown-active'), 'has dropdown-active class on body');
    });

    it('should remove dropdown-active class from body when hidden', function() {
      $('body').addClass('dropdown-active');
      $('.dropdown').addClass('open').find('[data-toggle=dropdown]').trigger('click');
      assert.isFalse($('body').hasClass('dropdown-active'), 'does not have dropdown active class on body');
    });

    it('should close dropdown when dropdown-backdrop is clicked', function() {
      var $dropdown = $('[data-toggle=dropdown]').trigger('click');
      $('.dropdown-backdrop').trigger('click');
      assert.isFalse($dropdown.parent('.dropdown').hasClass('open'), 'closes dropdown when dropdown-backdrop is clicked');
    });

    it('should focus first menu item on down keypress', function(done) {
      $('.dropdown-menu a:first').on('focus', function() {
        assert.ok('true', 'first item has focus');
        done();
      });
      $('[data-toggle=dropdown]').focus().trigger($.Event('keydown', { which: 40 }));
    });

    it('should focus first menu item on up keypress', function(done) {
      $('.dropdown-menu a:first').on('focus', function() {
        assert.ok('true', 'first item has focus');
        done();
      });
      $('[data-toggle=dropdown]').focus().trigger($.Event('keydown', { which: 38 }));
    });

    it('should focus first menu item on up keypress', function(done) {
      var dropdownHtml =
          '<div class="dropdown">'
        + '<a href="#" data-toggle="dropdown" aria-expanded="false">Dropdown</a>'
        + '<ul class="dropdown-menu">'
        + '<li><div class="dropdown-menu-item" tabIndex="0">A Link</div></li>'
        + '</div>';
      $fixture.html(dropdownHtml);

      $('.dropdown-menu .dropdown-menu-item:first').on('focus', function() {
        assert.ok('true', 'first item has focus');
        done();
      });
      $('[data-toggle=dropdown]').focus().trigger($.Event('keydown', { which: 38 }));
    });


    it('should close menu on esc', function() {
      $('.dropdown').addClass('open').find('[data-toggle=dropdown]').trigger($.Event('keydown', { which: 27 }));
      assert.isFalse($('.dropdown').hasClass('open'), 'dropdown menu was closed');
    });

    it('should close menu when menu item is clicked', function() {
      $('.dropdown').addClass('open').find('[data-toggle=dropdown]');
      $('.dropdown-menu li:first').trigger('click');
      assert.isFalse($('.dropdown').hasClass('open'), 'dropdown menu was closed');
    });

    it('should fire show event', function(done) {
      $('.dropdown').on('show', function() {
        assert.isFalse($('.dropdown').hasClass('open'), 'fired show event');
        done();
      });
      $('[data-toggle=dropdown]').trigger('click');
    });

    it('should fire hide event', function(done) {
      $('.dropdown').on('hide', function() {
        assert.isTrue($('.dropdown').hasClass('open'), 'fired hide event');
        done();
      });
      $('.dropdown').addClass('open').find('[data-toggle=dropdown]').trigger('click');
    });

    it('should fire shown event', function(done) {
      $('.dropdown').on('shown', function() {
        assert.isTrue($('.dropdown').hasClass('open'), 'fired shown event');
        done();
      });
      $('[data-toggle=dropdown]').trigger('click');
    });

    it('should fire hidden event', function(done) {
      $('.dropdown').on('hidden', function() {
        assert.isFalse($('.dropdown').hasClass('open'), 'fired hidden event');
        done();
      });
      $('.dropdown').addClass('open').find('[data-toggle=dropdown]').trigger('click');
    });

  });

})();