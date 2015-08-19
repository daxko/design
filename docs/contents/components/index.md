---
title: "Components"
theme: "key-lime"
template: toc.hbs
---

## Dropdowns

The dropdown component lets you create a toggleable menu for a list of links or actions.

You can create a dropdown component by wrapping the trigger and menu within a `.dropdown`.

{{#example 'html'}}
<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
{{/example}}

### Alignment

By default, dropdown menus are automatically aligned along the left side of its parent. You can change the positioning to the right side by adding `.right` to `.dropdown-menu`. Your trigger can be anything from a button to a link -- just add the `[data-toggle="dropdown"]` attribute.

{{#example 'html'}}
<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu right">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
{{/example}}

### Divider

Need to add some spacing to your menu? You can add a `.divider` class to a `li` element to separate different series of links.

{{#example 'html'}}
<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
{{/example}}

## Tabs

### Horizontal Tabs

{{#example 'html'}}
<ul class="tabs">
  <li class="active"><a href="#">Tab A</a></li>
  <li><a href="#">Tab B</a></li>
  <li><a href="#">Tab C</a></li>
  <li><a href="#">Tab D</a></li>
</ul>
{{/example}}

### Vertical Tabs

By default, vertical tabs will display on the left and will take up the full width of the container you place them in.

{{#example 'html'}}
<ul class="tabs tabs-vertical">
  <li class="active"><a href="#">Tab A</a></li>
  <li><a href="#">Tab B</a></li>
  <li><a href="#">Tab C</a></li>
  <li><a href="#">Tab D</a></li>
</ul>
{{/example}}

You can also have vertical tabs displayed on the right by adding a `.right` class.

{{#example 'html'}}
<ul class="tabs tabs-vertical right">
  <li class="active"><a href="#">Tab A</a></li>
  <li><a href="#">Tab B</a></li>
  <li><a href="#">Tab C</a></li>
  <li><a href="#">Tab D</a></li>
</ul>
{{/example}}

Vertical tabs can also have sub navigation items.

{{#example 'html'}}
<ul class="tabs tabs-vertical right">
  <li class="active"><a href="#">Tab A</a></li>
  <li><a href="#">Tab B</a>
    <ul>
      <li><a href="#">Sub-Tab A</a></li>
      <li><a href="#">Sub-Tab B</a></li>
      <li><a href="#">Sub-Tab C</a></li>
    </ul>
  </li>
  <li><a href="#">Tab C</a></li>
  <li><a href="#">Tab D</a></li>
</ul>
{{/example}}

Since tabs don't have a implicit width, you may want to consider placing them in a grid to align along side your content.

{{#example 'html'}}
<div class="grid">
  <div class="col-3">
    <ul class="tabs tabs-vertical">
      <li class="active"><a href="#">Tab A</a></li>
      <li><a href="#">Tab B</a></li>
      <li><a href="#">Tab C</a></li>
      <li><a href="#">Tab D</a></li>
    </ul>
  </div>
  <div class="col-9">
    <div class="tab-panel">
      -- tab content goes here --
    </div>
  </div>
</div>
{{/example}}

## Navs

-- todo --

### Navbar

{{#example 'html' 'navbar-example'}}
<nav class="navbar" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <a href="#">Association Name</a>
    </div>
    <ul class="nav">
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
    </ul>
  </div>
</nav>
{{/example}}

## Alerts

Show alerts to a user informing them of successful or pending actions, or state. These should be used sparingly and very rarely more than one at once.

### Info

{{#example 'html'}}
<div class="alert alert-info"><strong>FYI.</strong> This person doesn't have any notes.</div>
{{/example}}

### Success

{{#example 'html'}}
<div class="alert alert-success"><strong>Good Job!</strong> You are all done with this member.</div>
{{/example}}

### Error

{{#example 'html'}}
<div class="alert alert-error"><strong>Oops!</strong> Something went terribly wrong.</div>
{{/example}}

### Warning

{{#example 'html'}}
<div class="alert alert-warning"><strong>Heads Up!</strong> Your membership is about to expire pretty soon.</div>
{{/example}}

## Modals

-- todo --

{{#example 'html'}}
<div class="modal">
  <div class="modal-header">
    Modal Title
    <span class="close"></span>
  </div>
  This is a modal
</div>
<div class="modal-backdrop"></div>
{{/example}}

## Lists

Need to create a list component? Use `.list`. Each list item should additionally have `.list-item` for consistent padding.

{{#example 'html'}}
<ul class="list">
  <li class="list-item">List Item</li>
  <!-- ... -->
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <!-- /... -->
</ul>
{{/example}}

You can also use list items in combination with `<a>` elements to create interactive list components with icons.

{{#example 'html'}}
<ul class="list">
  <li>
    <a href="#" class="list-item">
      List Item
      <div class="list-icons pull-right tooltip" aria-label="Edit"><span class="icon-pencil"></span></div>
    </a>
  </li>
  <!-- ... -->
  <li>
    <a href="#" class="list-item">
      List Item
      <div class="list-icons pull-right tooltip" aria-label="Edit"><span class="icon-pencil"></span></div>
    </a>
  </li>
  <li>
    <a href="#" class="list-item">
      List Item
      <div class="list-icons pull-right tooltip" aria-label="Edit"><span class="icon-pencil"></span></div>
    </a>
  </li>
  <!-- /... -->
</ul>
{{/example}}

### Bordered Lists

If you need borders around the list, use `.list-bordered`.

{{#example 'html'}}
<ul class="list list-bordered">
  <li class="list-item">List Item</li>
  <!-- ... -->
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <!-- /... -->
</ul>
{{/example}}

### List Header

You can also have a list header by including a preceding element with a `.list-header` class.

{{#example 'html'}}
<div class="list-header">List Header</div>
<ul class="list list-bordered">
  <li class="list-item">List Item</li>
  <!-- ... -->
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <!-- /... -->
</ul>
{{/example}}

## Button Groups

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

## Tooltips

Add tooltips to almost any element. Just add a `.tooltip` class along with an `aria-label` attribute containing the tooltip text.

> Tooltips can not be added to elements that have `:before` or `:after` psuedo elements. If you need a tooltip on an element with psuedo-elements, you will need to add the tooltip to the parent instead.

{{#example 'html'}}
<button class="btn tooltip" aria-label="This is a tooltip for the button">Button with Tooltip</button>
{{/example}}

You can also specify the direction of the tooltip:

* `tooltip-n` -- tooltip on top
* `tooltip-e` -- tooltip on right
* `tooltip-s` -- tooltip on bottom
* `tooltip-w` -- tooltip on left

<p></p>

{{#example 'html'}}
<p><span class="tooltip tooltip-n" aria-label="I'm on the top!">Tooltip on top</span></p>
<p><span class="tooltip tooltip-e" aria-label="I'm on the right!">Tooltip on right</span></p>
<p><span class="tooltip tooltip-s" aria-label="I'm on the bottom!">Tooltip on bottom</span></p>
<p><span class="tooltip tooltip-w" aria-label="I'm on the left!">Tooltip on left</span></p>
{{/example}}