## Toggle Switches

Toggle switches are used in place of regular checkboxes to indicate the on/off state of a checkbox. They also provide a larger hit area for mobile devices and are the preferred way to display single checkboxes.

{{#example 'html'}}
<label class="toggle-switch">
  <input type="checkbox" />
  <span class="switch"></span>
  <span data-on="Yes" data-off="No"></span>
</label>
{{/example}}

To display a toggle switch as active, just set the `checked` property on the checkbox.

{{#example 'html'}}
<label class="toggle-switch">
  <input type="checkbox" checked />
  <span class="switch"></span>
  <span data-on="Yes" data-off="No"></span>
</label>
{{/example}}

You can also customize the display of the on/off states by changing the `data-on` and `data-off` properties.

{{#example 'html'}}
<label class="toggle-switch">
  <input type="checkbox" />
  <span class="switch"></span>
  <span data-on="Go" data-off="Stop"></span>
</label>
{{/example}}
