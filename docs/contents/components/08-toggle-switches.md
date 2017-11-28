## Toggle Switches

Toggle switches are used in place of regular checkboxes to indicate the on/off state of a checkbox. They also provide a larger hit area for mobile devices and are the preferred way to display single checkboxes.

{{#example 'html'}}
<label class="toggle-switch">
  <input type="checkbox" />
  <span class="switch"></span>
  <span data-on="Active" data-off="Inactive"></span>
</label>
{{/example}}

To display a smaller toggle just change the class

{{#example 'html'}}
<label class="toggle-switch toggle-switch-small">
  <input type="checkbox" />
  <span class="switch"></span>
  <span data-on="Active" data-off="Inactive"></span>
</label>
{{/example}}

To display a toggle switch as active, just set the `checked` property on the checkbox.

{{#example 'html'}}
<label class="toggle-switch">
  <input type="checkbox" checked />
  <span class="switch"></span>
  <span data-on="Active" data-off="Inactive"></span>
</label>
{{/example}}