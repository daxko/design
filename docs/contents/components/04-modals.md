## Modals

Modal components can be used as a pop up dialog to allow for hidden actions to be performed on a page.

{{#example 'html'}}
<div class="modal" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modalTitle">
  <div id="modalTitle" class="modal-header">
    You Must Answer These Questions Three
    <button class="close" aria-label="Close" data-dismiss="modal"></button>
  </div>
  <div class="modal-body" role="document">
    <!-- ... -->
    <form class="form-horizontal">
      <fieldset>
        <div class="control-group">
          <label for="name">Name</label>
          <div class="controls">
            <input id="name" type="text" />
          </div>
        </div>
        <div class="control-group">
          <label for="quest">Quest</label>
          <div class="controls">
            <input id="quest" type="text" />
          </div>
        </div>
        <div class="control-group">
          <label>Favorite Color</label>
          <div class="controls">
            <label>
              <input type="radio" name="color" /> Blue
            </label>
            <label>
              <input type="radio" name="color" /> Green
            </label>
            <label>
              <input type="radio" name="color" /> AUUUUUUUUGGGH!
            </label>
          </div>
        </div>
      </fieldset>
    </form>
    <!-- /... -->
  </div>
  <div class="modal-footer">
    <button type="button" class="btn" data-dismiss="modal">Nevermind</button>
    <button type="button" class="btn btn-primary" data-dismiss="modal">Yes, Do It</button>
  </div>
</div>
<!-- hide -->
<div class="modal-backdrop"></div>
<!-- /hide -->
{{/example}}

<div class="alert alert-warning">
  <strong>Don't forget about accessibility!</strong> When creating modals, you will need to include `role="dialog"` and `aria-labeledby="modalHeader"` pointing to the id of your `.modal-header` element. Additionally, `role="document"` will need to be added to your `.modal-body` element.
</div>

Modals can be toggled by adding a `data-toggle="modal"` attribute along with a `data-target="#target" attributed pointed to your modal.

{{#example 'html'}}
<button type="button" class="btn" data-toggle="modal" data-target="#modal">Open Modal</button>
<div class="modal" id="modal" role="modal">
  <div class="modal-header">This is a modal <div class="close" data-dismiss="modal"></div></div>
  <div class="modal-body">Hello Modal!</div>
</div>
{{/example}}

<style>
  .modal:not(#modal) {
    display: block;
    opacity: 1;
    position: relative;
    top: 0;
    left: 0;
    -webkit-transform: none;
    transform: none;
  }
</style>