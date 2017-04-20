## Button Groups

Buttons can also be combined into button groups. Wrap them with a `.btn-group` class and your buttons will automatically be displayed with the correct spacing.

{{#example 'html'}}
<div class="btn-group">
  <button class="btn">Button</button>
  <button class="btn">Button</button>
  <button class="btn">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-mini">Mini Button</button>
  <button class="btn btn-mini">Mini Button</button>
  <button class="btn btn-mini">Mini Button</button>
</div>
{{/example}}


You can create button groups driven by checkboxes and radio buttons -- no javascript needed!
To select a button, just add a `checked` attribute to the checkbox or radio button you want to be selected.


### Checkbox Group

Use checkboxes when you need a button group where multiple items can be selected at a time.

{{#example 'html'}}
<div class="btn-group">
  <input id="sunday" type="checkbox" />
  <label for="sunday" class="btn">Sunday</label>
  <input id="monday" type="checkbox" />
  <label for="monday" class="btn">Monday</label>
  <!-- ... -->
  <input id="tuesday" type="checkbox" />
  <label for="tuesday" class="btn">Tuesday</label>
  <input id="wednesday" type="checkbox" />
  <label for="wednesday" class="btn">Wednesday</label>
  <input id="thursday" type="checkbox" />
  <label for="thursday" class="btn">Thursday</label>
  <input id="friday" type="checkbox" />
  <label for="friday" class="btn">Friday</label>
  <!-- /... -->
  <input id="saturday" type="checkbox" />
  <label for="saturday" class="btn">Saturday</label>
</div>
{{/example}}


### Radio Group

Use radio buttons when you need a button group where only one item can be selected at a time.

{{#example 'html'}}
<div class="btn-group">
  <input id="level-anyone" type="radio" name="level" checked />
  <label for="level-anyone" class="btn">Anyone</label>
  <input id="level-intermediate" type="radio" name="level" />
  <label for="level-intermediate" class="btn">Intermediate</label>
  <input id="level-advanced" type="radio" name="level" />
  <label for="level-advanced" class="btn">Advanced</label>
</div>
{{/example}}
