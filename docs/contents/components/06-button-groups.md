## Button Groups

You can create button groups driven by checkboxes and radio buttons -- no javascript needed!

To select a button, just add a `checked` attribute to the checkbox or radio button you want to be selected.

### Toggle Group

Use radio buttons when you need a button group where only one item can be selected at a time.

{{#example 'html'}}
<div class="toggle-group">
  <input id="level-anyone" type="radio" name="level" checked />
  <label for="level-anyone" class="btn">Anyone</label>
  <input id="level-intermediate" type="radio" name="level" />
  <label for="level-intermediate" class="btn">Intermediate</label>
  <input id="level-advanced" type="radio" name="level" />
  <label for="level-advanced" class="btn">Advanced</label>
</div>
{{/example}}

Use checkboxes when you need a button group where multiple items can be selected at a time.

{{#example 'html'}}
<div class="toggle-group">
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


### Checkbox Group
[Obsolete]
Use checkboxes when you need a button group where multiple items can be selected at a time.

{{#example 'html'}}
<div class="btn-group">
  <input id="bg-sunday" type="checkbox" />
  <label for="bg-sunday" class="btn">Sunday</label>
  <input id="bg-monday" type="checkbox" />
  <label for="bg-monday" class="btn">Monday</label>
  <!-- ... -->
  <input id="bg-tuesday" type="checkbox" />
  <label for="bg-tuesday" class="btn">Tuesday</label>
  <input id="bg-wednesday" type="checkbox" />
  <label for="bg-wednesday" class="btn">Wednesday</label>
  <input id="bg-thursday" type="checkbox" />
  <label for="bg-thursday" class="btn">Thursday</label>
  <input id="bg-friday" type="checkbox" />
  <label for="bg-friday" class="btn">Friday</label>
  <!-- /... -->
  <input id="bg-saturday" type="checkbox" />
  <label for="bg-saturday" class="btn">Saturday</label>
</div>
{{/example}}

### Radio Group
[Obsolete]
Use radio buttons when you need a button group where only one item can be selected at a time.

{{#example 'html'}}
<div class="btn-group">
  <input id="bg-level-anyone" type="radio" name="bg-level" checked />
  <label for="bg-level-anyone" class="btn">Anyone</label>
  <input id="bg-level-intermediate" type="radio" name="bg-level" />
  <label for="bg-level-intermediate" class="btn">Intermediate</label>
  <input id="bg-level-advanced" type="radio" name="bg-level" />
  <label for="bg-level-advanced" class="btn">Advanced</label>
</div>
{{/example}}
