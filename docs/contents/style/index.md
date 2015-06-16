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

## Buttons

Buttons are typically used for **actions**, while links are typically used for **destinations**.

### Default

Standard buttons are easy -- just use a `.btn` class! You can apply this class to both `<button>` and `<a>` elements and they will both appear exactly the same.

When using a `<button>` element, always specify the type. When using a `<a>` element, always include `role="button"` for accessibility.

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

-- TODO --

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

## Dropdowns

-- todo --

{{#example 'html'}}
<div class="dropdown">
  <button type="button" class="btn" data-trigger="dropdown">Dropdown <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
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
