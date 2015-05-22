---
title: "Style Guide"
theme: "banana-pudding"
template: toc.hbs
---

## Grids

The grid is a pretty standard 12 column responsive grid -- you create wrapper `.grid` with individual columns.

<div class="grid">
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-1">
    <div class="box">col-1</div>
  </div>
  <div class="col-4">
    <div class="box">col-4</div>
  </div>
  <div class="col-4">
    <div class="box">col-4</div>
  </div>
  <div class="col-4">
    <div class="box">col-4</div>
  </div>
  <div class="col-6">
    <div class="box">col-6</div>
  </div>
  <div class="col-6">
    <div class="box">col-6</div>
  </div>
  <div class="col-12">
    <div class="box">col-12</div>
  </div>
</div>

### 3 Column Layout

```html
<div class="grid">
  <div class="col-4"></div>
  <div class="col-4"></div>
  <div class="col-4"></div>
</div>
```

<div class="grid">
  <div class="col-4">
    <div class="box">col-4</div>
  </div>
  <div class="col-4">
    <div class="box">col-4</div>
  </div>
  <div class="col-4">
    <div class="box">col-4</div>
  </div>
</div>

## Buttons

Buttons are typically used for **actions**, while links are typically used for **destinations**.

### Default buttons

Standard buttons are easy -- just use a `.btn` class! You can apply this class to both `<button>` and `<a>` elements and they will both appear exactly the same.

When using a `<button>` element, always specify the type. When using a `<a>` element, always include `role="button"` for accessibility.

{{example 'html'}}
<button type="button" class="btn">Button Button</button>
<a class="btn" href="#" role="button">Link Button</a>
{{/example}}

Buttons come in two sizes, big and small. Just add a `.btn-mini` to use the smaller variation.

{{example 'html'}}
<button type="button" class="btn">Normal Button</button>
<button type="button" class="btn btn-mini">Small Button</button>
{{/example}}

### Primary Buttons

Primary buttons are used to indicate a primary action, such as a form save. Just add a `.btn-primary` class to your button, and you're good to go!

{{example 'html'}}
<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-mini btn-primary">Small Primary Button</button>
{{/example}}

### Danger Buttons

Welcome to the **danger zone**. Danger buttons are red, indicating that the following action may do something potentially dangerous. Just add a `.btn-danger`.

{{example 'html'}}
<button type="button" class="btn btn-danger">Danger Button</button>
<button type="button" class="btn btn-mini btn-danger">Small Danger Button</button>
{{/example}}

### Disabled Buttons

`<button>` elements can be disabled with the `disabled` attribute, and `<a>` elements with the `.disabled` class.
<button type="button" class="btn" disabled>Disabled Button</button> <a href="#" class="btn disabled">Disabled Link</a>

{{example 'html'}}
<button type="button" class="btn" disabled>Disabled Button</button>
<a href="#" class="btn disabled">Disabled Link</a>
{{/example}}

Disabled styling is also applied to primary and danger buttons:

{{example 'html'}}
<button type="button" class="btn btn-primary" disabled>Primary Disabled Button</button>
<a href="#" class="btn btn-primary disabled">Primary Disabled Link</a>
{{/example}}

{{example 'html'}}
<button type="button" class="btn btn-danger" disabled>Danger Disabled Button</button>
<a href="#" class="btn btn-danger disabled">Danger Disabled Link</a>
{{/example}}