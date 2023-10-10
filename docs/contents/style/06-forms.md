## Forms

### Form Styling

Form styling can be applied using the `<form>` tag or by using the `<div class="form">` class instead. 

{{#example 'html'}}
<form>
  <label>Name</label>
  <input type="text"/>
  <label>Phone Number</label>
  <input type="tel"/>
  <button type="submit" class="btn">Submit</button>
</form>
<br/>
<div class="form">
  <label>Name</label>
  <input type="text"/>
  <label>Phone Number</label>
  <input type="tel"/>
  <button type="submit" class="btn">Submit</button>
</div>
{{/example}}

### Inputs

We style the most common text-based input fields, including `text`, `password`, `email`, `number`, `tel`, `url`, `date`, `search`, `datetime`, `time`, and `date`.

> Inputs will only be styled with valid `type` attributes. You **must** include this!

{{#example 'html'}}
<input type="text" placeholder="text input" />
{{/example}}

#### Selects

Selects also have have some of their basic styles overwritten to match the style of inputs.

> Note: We can't style the select caret in IE9, so the native implementation will appear there.

{{#example 'html'}}
<select>
  <option>Apple</option>
  <option>Banana</option>
  <!-- ... -->
  <option>Orange</option>
  <option>Peach</option>
  <option>Pear</option>
  <!-- /... -->
</select>
{{/example}}

#### Textarea

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate tempore commodi, minima quia reprehenderit. Saepe aperiam cum fugiat ullam, autem quasi minima ipsam quo, a nihil eum fugit, vel velit.

{{#example 'html'}}
<textarea>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</textarea>
{{/example}}

### Input Sizing

Like [buttons](#button-default), there are two sizes of inputs. Just add `.input-mini` to use the smaller variation.

{{#example 'html'}}
<input type="text" placeholder="text input"/>
<input type="text" placeholder=".input-mini" class="input-mini" />
<input type="text" placeholder=".input-large" class="input-large" />
<br/>
<select>
  <option>Apple</option>
  <option>Banana</option>
  <!-- ... -->
  <option>Orange</option>
  <option>Peach</option>
  <option>Pear</option>
  <!-- /... -->
</select>
<select class="input-mini">
  <option>Apple</option>
  <option>Banana</option>
  <!-- ... -->
  <option>Orange</option>
  <option>Peach</option>
  <option>Pear</option>
  <!-- /... -->
</select>
<select class="input-large">
  <option>Apple</option>
  <option>Banana</option>
  <!-- ... -->
  <option>Orange</option>
  <option>Peach</option>
  <option>Pear</option>
  <!-- /... -->
</select>
{{/example}}

You can also make form elements take up the full width of its container element with `.input-block`.

{{#example 'html'}}
<input type="text" class="input-block"/>
{{/example}}

### Input Grouping

You can group inputs with text add-ons with `.add-on`, or buttons with `.add-on-btn`.

{{#example 'html'}}
<div class="grid">
  <div class="col-4">
    <div class="input-group">
      <span class="add-on">@</span>
      <input type="text" placeholder="username" />
    </div>
  </div>
  <div class="col-4">
    <div class="input-group">
      <input type="text" />
      <span class="add-on">@</span>
    </div>
  </div>
  <div class="col-4">
    <div class="input-group">
      <span class="add-on">@</span>
      <input type="text" />
      <span class="add-on">@</span>
    </div>
  </div>
</div>
<br/>
<div class="grid">
  <div class="col-4">
    <div class="input-group">
      <span class="add-on-btn">
        <button type="button" class="btn">Go!</button>
      </span>
      <input type="text"/>
    </div>
  </div>
  <div class="col-4">
    <div class="input-group">
      <input type="text"/>
      <span class="add-on-btn">
        <button type="button" class="btn">Go!</button>
      </span>
    </div>
  </div>
  <div class="col-4">
    <div class="input-group">
      <span class="add-on-btn">
        <button type="button" class="btn">Go!</button>
      </span>
      <input type="text"/>
      <span class="add-on-btn">
        <button type="button" class="btn">Go!</button>
      </span>
    </div>
  </div>
</div>
{{/example}}

### Inline Forms

Layout your forms inline with `.form-inline`. This will ensure that a form is displayed inline.

{{#example 'html'}}
<form class="form-inline">
  <label>Name</label>
  <input type="text"/>
  <label>
    <input type="checkbox" name="inline-check" /> Checked
  </label>
  <label>Phone Number</label>
  <input type="tel"/>
  <button type="submit" class="btn">Submit</button>
</form>
{{/example}}

### Horizontal Forms

Layout your forms horizontally with `.form-horizontal`. You can group form labels and controls with `.control-group` and contain checkboxes or radio buttons with a `.controls` element.

{{#example 'html'}}
<form class="form-horizontal">
  <fieldset>
    <legend>You Must Answer These Questions Three</legend>
    <div class="control-group">
      <label for="name">Name</label>
      <div class="controls">
        <input id="name" type="text" class="input-large" />
      </div>
    </div>
    <!-- ... -->
    <div class="control-group">
      <label for="states">States</label>
      <div class="controls">
        <select id="states">
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Dist of Columbia</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
            <!-- /... -->
          </select>
      </div>
    </div>
    <div class="control-group">
      <label for="quest">Favorite Colors</label>
      <div class="controls">
        <label>
          <input type="checkbox" name="color" /> Red
        </label>
        <label>
          <input type="checkbox" name="color" /> Blue
        </label>
        <label>
          <input type="checkbox" name="color" /> Green
        </label>
        <label>
          <input type="checkbox" name="color" /> Yellow
        </label>
      </div>
    </div>
    <!-- /... -->
    <div class="control-group">
      <label>Favorite Color</label>
      <div class="controls">
        <label>
          <input type="radio" name="color" /> Blue
        </label>
        <!-- ... -->
        <label>
          <input type="radio" name="color" /> Green
        </label>
        <label>
          <input type="radio" name="color" /> AUUUUUUUUGGGH!
        </label>
        <!-- /... -->
      </div>
    </div>
  </fieldset>
</form>
{{/example}}

### Grid Layout

For more complex layouts, we recommend you use the [grid](#grid). Input widths will automatically take up the full width of the grid column.

{{#example 'html'}}
<form>
  <fieldset>
    <legend>Address</legend>
    <div class="grid">
      <div class="col-4">
        <label>
          Address 1
          <input type="text" />
        </label>
      </div>
      <div class="col-4">
        <label>
          Address 2
          <input type="text" />
        </label>
      </div>
    </div>
    <div class="grid">
      <div class="col-3">
        <label>
          City
          <input type="text" />
        </label>
      </div>
      <div class="col-3">
        <label>
          State
          <select>
            <!-- ... -->
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Dist of Columbia</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
            <!-- /... -->
          </select>
        </label>
      </div>
      <div class="col-1">
        <label>
          Zip
          <input type="text" class="input-mini"/>
        </label>
      </div>
    </div>
    <div class="grid">
      <div class="col-6">
        <label>
          <input type="checkbox"/> Default Address
        </label>
      </div>
    </div>
  </fieldset>
</form>
{{/example}}
