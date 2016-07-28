## Buttons

Buttons slightly differ in MX, in that only standard `.btn` and `.btn-primary` are supported.

{{#example}}
<button type="button" class="btn">Button</button>
<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn" disabled>Button</button>
<button type="button" class="btn btn-primary" disabled>Primary Button</button>
<div class="btn-group">
  <button type="button" class="btn">A</button>
  <button type="button" class="btn">B</button>
  <button type="button" class="btn">C</button>
</div>
{{/example}}

#### Inverted Buttons

For elements that have a solid background, `.btn-inverted` is available.

{{#example 'html' 'gray-500'}}
<button type="button" class="btn btn-inverted">Button</button>
<button type="button" class="btn btn-inverted" disabled>Disabled Button</button>
<div class="btn-group">
  <button type="button" class="btn btn-inverted">A</button>
  <button type="button" class="btn btn-inverted">B</button>
  <button type="button" class="btn btn-inverted">C</button>
</div>
{{/example}}