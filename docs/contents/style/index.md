---
title: "Style Guide"
theme: "banana-pudding"
template: toc.hbs
---

## Base

Everything is built on top of [normalize.css](http://necolas.github.io/normalize.css/) to help render elements consistently across browsers.

### HTML5 doctype

We use HTML elements and CSS properties that **require** an HTML5 doctype -- so be sure to include it as part of your core layout.

```html
<!DOCTYPE html>
<html lang="en">
<!-- site content here -->
</html>
```

### Viewport

Your base layout should also include a viewport meta element.

```html
<meta name="viewport" content="width=device-width,initial-scale=1"/>
```

### Box Sizing

We also use `border-box` as the default box-sizing, which all elements inherit by default.

```css
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
```

This method allows us to [inherit the box sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) on all elements, while still allowing us to override it for components that were originally built with the `context-box` in mind.

```css
.component {
  /* We can override the default setting here  */
  /* which will cascade down to child elements */
  box-sizing: content-box;
}
```

## Layouts

### Container

Center page content with a `.container` class. This container will automatically take up the full width of the screen up to 1200px. The default width can be overwritten by the `$container-width` sass variable.

```html
<div class="container">
  <!-- contents to be centered -->
</div>
```

### Grid

The grid is a pretty standard 12 column responsive grid -- you create a wrapper `.grid` with individual columns. Columns are placed using `inline-block` instead of floats which allows for a little bit cleaner markup and an easier way to handle certain layouts at smaller viewports.

Since we're setting the box sizing to `border-box`, the grid sizes can include the gutters as part of the column instead of trying to perform complex margin calculations. The size of the gutters can be adjusted by changing the `$grid-gutters` sass variable.

{{#example 'html' 'grid-example'}}
<div class="grid">
  <div class="col-4">.col-4</div>
  <div class="col-8">.col-8</div>
  <div class="col-3">.col-3</div>
  <div class="col-9">.col-9</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
</div>
{{/example}}

### Column Alignment

Columns can be centered by adding a `.center` class to the column.

{{#example 'html' 'grid-example'}}
<div class="grid center">
  <div class="col-4">Centered</div>
  <div class="col-4">Columns</div>
</div>
{{/example}}

You can also left or right align columns by adding a `.left` or `.right` class respectively.

{{#example 'html' 'grid-example'}}
<div class="grid right">
  <div class="col-2">.col-2</div>
  <div class="col-3">.col-3</div>
</div>
{{/example}}

{{#example 'html' 'grid-example'}}
<div class="grid left">
  <div class="col-2">.col-2</div>
  <div class="col-3">.col-3</div>
</div>
{{/example}}

You can also adjust the vertical alignment of grid columns with `.top`, `.middle`, or `.bottom`. By default grid columns will be aligned across the top of the grid rows.

{{#example 'html' 'grid-example'}}
<div class="grid middle">
  <div class="col-6"><h1>Big column</h1></div>
  <div class="col-6"><small>Small column</small></div>
</div>
{{/example}}

## Typography

### Headings

{{#example 'html'}}
<h1>h1. Heading</h1> <!-- 35px -->
<h2>h2. Heading</h2> <!-- 28px -->
<h3>h3. Heading</h3> <!-- 23px -->
<h4>h4. Heading</h4> <!-- 20px -->
<h5>h5. Heading</h5> <!-- 18px -->
<h6>h6. Heading</h6> <!-- 14px -->
{{/example}}

For headings, we're using [sass placeholders](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_) to set the appropriate font size for our headings. If you need to match a heading size with a particular element, you can do so by using `@extend` along with the placeholder name.

```scss
.my-element {
  @extend %h3;
}
```

### Unordered Lists

A list where the order of the items doesn't matter.

{{#example 'html'}}
<ul>
  <li>Bacon</li>
  <li>Ham</li>
  <li>Loin</li>
  <li>Shoulder
    <ul>
      <li>Pork Belly</li>
      <li>Spare Ribs</li>
      <li>Baby Back Ribs</li>
    </ul>
  </li>
  <li>Pork Chop</li>
</ul>
{{/example}}

### Ordered Lists

A list where the order of the items *does* matter.

{{#example 'html'}}
<ol>
  <li>Bacon</li>
  <li>Ham</li>
  <li>Loin</li>
  <li>Shoulder
    <ol>
      <li>Pork Belly</li>
      <li>Spare Ribs</li>
      <li>Baby Back Ribs</li>
    </ol>
  </li>
  <li>Pork Chop</li>
</ol>
{{/example}}

### Styled Text

You can style inline text elements.

{{#example 'html'}}
<p>This text is <s>striked</s></p>
<p>This text is <mark>marked</mark></p>
<p>This text is <strong>strong</strong></p>
<p>This text is <em>emphasized</em></p>
<p>This text is <u>underlined</u></p>
<p>This text is <small>small</small></p>
<p>This text is <sup>superscript</sup></p>
<p>This text is <sub>subscript</sub></p>
{{/example}}

## Buttons

Buttons are typically used for **actions**, while links are typically used for **destinations**.

### Default Buttons

Standard buttons are easy -- just use a `.btn` class! You can apply this class to both `<button>` and `<a>` elements and they will both appear exactly the same.

When using a `<button>` element, always specify the type. When using an `<a>` element, always include `role="button"` for accessibility.

{{#example 'html'}}
<button type="button" class="btn">Button Button</button>
<a class="btn" href="#" role="button">Link Button</a>
{{/example}}

Buttons come in two sizes, big and small. Just add a `.btn-mini` to use the smaller variation.

{{#example 'html'}}
<button type="button" class="btn">Normal Button</button>
<button type="button" class="btn btn-mini">Small Button</button>
{{/example}}

### Primary

Primary buttons are used to indicate a primary action, such as a form save. Just add a `.btn-primary` class to your button, and you're good to go!

{{#example 'html'}}
<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-mini btn-primary">Small Primary Button</button>
{{/example}}

### Danger

Welcome to the **danger zone**. Danger buttons are red, indicating that the following action may do something potentially dangerous. Just add a `.btn-danger`.

{{#example 'html'}}
<button type="button" class="btn btn-danger">Danger Button</button>
<button type="button" class="btn btn-mini btn-danger">Small Danger Button</button>
{{/example}}

### Disabled

`<button>` elements can be disabled with the `disabled` attribute, and `<a>` elements with the `.disabled` class.

{{#example 'html'}}
<button type="button" class="btn" disabled>Disabled Button</button>
<a href="#" class="btn disabled" role="button">Disabled Link</a>
{{/example}}

Disabled styling is also applied to primary and danger buttons:

{{#example 'html'}}
<button type="button" class="btn btn-primary" disabled>Primary Disabled Button</button>
<a href="#" class="btn btn-primary disabled" role="button">Primary Disabled Link</a>
{{/example}}

{{#example 'html'}}
<button type="button" class="btn btn-danger" disabled>Danger Disabled Button</button>
<a href="#" class="btn btn-danger disabled" role="button">Danger Disabled Link</a>
{{/example}}

### Button Groups

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

### Block Buttons

You can make any button take up the full width of its container by adding a `.btn-block` class.

{{#example 'html'}}
<button class="btn btn-block">Button</button>
<button class="btn btn-mini btn-block">Mini Button</button>
{{/example}}

## Tables

Since so many different components use tables for layout, we don't want to override any default styles that may come with those components. The use of styled tables are opt-in by adding a `.table` class to any table.

### Basic Table

{{#example 'html'}}
<table class="table">
  <thead>
    <tr>
      <th>Room Name</th>
      <th>Color</th>
      <th>Extension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red Velvet</td>
      <td>#ee264e</td>
      <td>x0715</td>
    </tr>
    <!-- ... -->
    <tr>
      <td>Banana Pudding</td>
      <td>#efad1c</td>
      <td>x0713</td>
    </tr>
    <tr>
      <td>Key Lime</td>
      <td>#b3ba5a</td>
      <td>x0712</td>
    </tr>
    <tr>
      <td>Cotton Candy</td>
      <td>#a5dbd8</td>
      <td>x0714</td>
    </tr>
    <!-- /... -->
  </tbody>
</table>
{{/example}}

### Bordered

Need some borders around your table? Add `.table-bordered`.

{{#example 'html'}}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Room Name</th>
      <th>Color</th>
      <th>Extension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red Velvet</td>
      <td>#ee264e</td>
      <td>x0715</td>
    </tr>
    <!-- ... -->
    <tr>
      <td>Banana Pudding</td>
      <td>#efad1c</td>
      <td>x0713</td>
    </tr>
    <tr>
      <td>Key Lime</td>
      <td>#b3ba5a</td>
      <td>x0712</td>
    </tr>
    <tr>
      <td>Cotton Candy</td>
      <td>#a5dbd8</td>
      <td>x0714</td>
    </tr>
    <!-- /... -->
  </tbody>
</table>
{{/example}}

### Hover Rows

You can also enable hover state on table rows with a `.table-hover` class.

{{#example 'html'}}
<table class="table table-hover">
  <thead>
    <tr>
      <th>Room Name</th>
      <th>Color</th>
      <th>Extension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red Velvet</td>
      <td>#ee264e</td>
      <td>x0715</td>
    </tr>
    <!-- ... -->
    <tr>
      <td>Banana Pudding</td>
      <td>#efad1c</td>
      <td>x0713</td>
    </tr>
    <tr>
      <td>Key Lime</td>
      <td>#b3ba5a</td>
      <td>x0712</td>
    </tr>
    <tr>
      <td>Cotton Candy</td>
      <td>#a5dbd8</td>
      <td>x0714</td>
    </tr>
    <!-- /... -->
  </tbody>
</table>
{{/example}}

### Condensed

Need to save some space? You can make tables more compact by adding `.table-condensed`.

{{#example 'html'}}
<table class="table table-condensed">
  <thead>
    <tr>
      <th>Room Name</th>
      <th>Color</th>
      <th>Extension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red Velvet</td>
      <td>#ee264e</td>
      <td>x0715</td>
    </tr>
    <!-- ... -->
    <tr>
      <td>Banana Pudding</td>
      <td>#efad1c</td>
      <td>x0713</td>
    </tr>
    <tr>
      <td>Key Lime</td>
      <td>#b3ba5a</td>
      <td>x0712</td>
    </tr>
    <tr>
      <td>Cotton Candy</td>
      <td>#a5dbd8</td>
      <td>x0714</td>
    </tr>
    <!-- /... -->
  </tbody>
</table>
{{/example}}

## Forms

### Example Form

By default, forms don't have a standard layout. You will need to use one of the [below](#horizontal-forms) layout patterns to organize your forms.

{{#example 'html'}}
<form>
  <label>
    Name
    <input type="text"/>
  </label>
  <label>
    Phone Number
    <input type="tel"/>
  </label>
  <button type="submit" class="btn">Submit</button>
</form>
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

### Input Sizing

Like [buttons](#button-default), there are two sizes of inputs. Just add `.input-mini` to use the smaller variation.

{{#example 'html'}}
<input type="text" placeholder="text input"/>
<input type="text" placeholder=".input-mini" class="input-mini" />
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
      <span class="add-on">.00</span>
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
</div>
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
        <input id="name" type="text" />
      </div>
    </div>
    <!-- ... -->
    <div class="control-group">
      <label for="quest">Quest</label>
      <div class="controls">
        <input id="quest" type="text" />
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
      <div class="col-2">
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
          <input type="text"/>
        </label>
      </div>
      <div class="col-6">
        <label>
          <input type="checkbox"/> Default Address
        </label>
      </div>
    </div>
  </fieldset>
</form>
{{/example}}

## Utilities

There's a handful of utility classes available for quick alignment, display, and more.

### Floats

Float an item left or right with `.pull-left` or `.pull-right`. You can also optionally wrap them with a `.cf`, depending on your layout.

{{#example 'html'}}
<div class="cf">
  <code class="pull-left">.pull-left</code>
  <code class="pull-right">.pull-right</code>
</div>
{{/example}}

### Hiding elements

Elements can be hidden with a `.hide` class. This will hide the element for both visual and screen readers.

{{#example 'html'}}
<p class="hide">You can't see me!</p>
{{/example}}

If you need to hide an element for visual, but not for screen readers you can use `.sr-only` instead.

{{#example 'html'}}
<p class="sr-only">Only screen readers can see me!</p>
{{/example}}

### Sticky

You can make any element [sticky](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning), with a `.sticky` class. The element will remain stuck to the viewport until the positioning specified exceeds its closest relative container.

{{#example 'html'}}
<div class="sticky-container">
  <span class="sticky">Sticky Element</span>
</div>
{{/example}}

### Text Alignment

Change the way text is aligned in an element with its respective class.

{{#example 'html'}}
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
{{/example}}
