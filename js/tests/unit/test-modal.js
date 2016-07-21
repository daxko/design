(function() {
  'use strict';

  describe('modal', function() {

    var modalHtml =
        '<button type="button" data-toggle="modal" data-target="#modal-test" tabindex="-1">Trigger Modal</button>'
      + '<div class="modal" id="modal-test">'
      + '<div class="modal-header"><button class="close" data-dismiss="modal"></button></div>'
      + '</div>'
      + '</div>';

    var $modal, $trigger;

    beforeEach(function() {
      $fixture.html(modalHtml);
      $modal = $('.modal');
      $trigger = $('[data-toggle=modal]');
    });

    afterEach(function() {
      $('body').removeClass('modal-active');
      $('.modal-backdrop').remove();
    });

    after(function() {
      $fixture.empty();
    });

    it('should create modal plugin', function() {
      assert.ok($.fn.modal, 'modal plugin exists');
    });

    it('should open modal with data-target', function(done) {
      $modal.on('show', function() {
        assert.ok(true, 'modal was shown');
        done();
      });
      $trigger.trigger('click');
    });

    it('should set aria-hidden="false" when modal is opened', function(done) {
      $modal
        .on('shown', function() {
          assert.equal($modal.attr('aria-hidden'), 'false', 'has aria-hidden="false" attribute');
          done();
        })
        .modal('show');
    });

    it('should set aria-hidden="true" when modal is hidden', function(done) {
      $modal
        .on('hidden', function() {
          assert.equal($modal.attr('aria-hidden'), 'true', 'has aria-hidden="true" attribute');
          done();
        })
        .modal('show')
        .modal('hide');
    });

    it('should add open class to modal when opened', function(done) {
      $modal
        .on('shown', function() {
          assert.isTrue($modal.hasClass('modal--open'), 'has open class');
          done();
        })
        .modal('show');
    });

    it('should remove open class when closed', function(done) {
      $modal
        .addClass('modal--open')
        .on('hidden', function() {
          assert.isFalse($modal.parent('.modal').hasClass('modal--open'), 'does not have open class');
          done();
        })
        .modal('show')
        .modal('hide');
    });

    it('should append modal-backdrop to body element when opened', function(done) {
      $modal
        .on('shown', function() {
          assert.equal($('body').children('.modal-backdrop').length, 1, 'has modal-backdrop element');
          done();
        })
        .modal('show');
    });

    it('should remove modal-backdrop from body element when hidden', function(done) {
      $modal
        .on('hidden', function() {
          assert.equal($('body').children('.modal-backdrop').length, 0, 'does not have modal-backdrop element');
          done();
        })
        .modal('show')
        .modal('hide');
    });

    it('should add modal-active class to body when opened', function(done) {
      $modal
        .on('shown', function() {
          assert.isTrue($('body').hasClass('modal-active'), 'has modal-active class on body');
          done();
        })
        .modal('show');
    });

    it('should remove modal-active class from body when hidden', function(done) {
      $modal
        .on('hidden', function() {
          assert.isFalse($('body').hasClass('modal-active'), 'does not have modal active class on body');
          done();
        })
        .modal('show')
        .modal('hide');
    });

    it('should close modal when modal-backdrop is clicked', function(done) {
      $modal
        .on('shown', function() {
          $('.modal-backdrop').trigger('click');
        })
        .on('hidden', function() {
          assert.ok(true, 'modal was hidden');
          done();
        })
        .modal('show');
    });

    it('should close modal on esc', function(done) {
      $modal
        .on('shown', function() {
          $modal.trigger($.Event('keydown', { which: 27 }));
        })
        .on('hidden', function() {
          assert.ok(true, 'modal was hidden');
          done();
        })
        .modal('show');
    });

    it('should close modal when close button is clicked', function(done) {
      $modal
        .on('shown', function() {
          $modal.find('[data-dismiss]').trigger('click');
        })
        .on('hidden', function() {
          assert.ok(true, 'modal was hidden');
          done();
        })
        .modal('show');
    });

    it('should fire show event', function(done) {
      $modal
        .on('show', function() {
          assert.ok(true, 'show event was fired');
          done();
        })
        .modal('show');
    });

    it('should not fire shown event when show was prevented', function(done) {
      $modal
        .on('show', function(e) {
          e.preventDefault();
          assert.ok(true, 'show event was fired');
          done();
        })
        .on('shown', function() {
          assert.ok(false, 'shown event was fired');
        })
        .modal('show');
    });

    it('should fire hide event', function(done) {
      $modal
        .on('hide', function() {
          assert.ok(true, 'hide event was fired');
          done();
        })
        .modal('show')
        .modal('hide');
    });

    it('should not fire hidden event when hide was prevented', function(done) {
      $modal
        .on('hide', function(e) {
          e.preventDefault();
          assert.ok(true, 'hide event was fired');
          done();
        })
        .on('hidden', function() {
          assert.ok(false, 'hidden event was fired');
        })
        .modal('hide');
    });

  });

})();