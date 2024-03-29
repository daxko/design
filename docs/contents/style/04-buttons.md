## Buttons

Buttons are typically used for **actions**, while links are typically used for **destinations**.

### Default Buttons

Standard buttons are easy -- just use a `.btn` class! You can apply this class to both `<button>` and `<a>` elements and they will both appear exactly the same.

When using a `<button>` element, always specify the type. When using an `<a>` element, always include `role="button"` for accessibility.

{{#example 'html'}}
<button type="button" class="btn">Button Button</button>
<a class="btn" href="javascript:void(0)" role="button">Link Button</a>
{{/example}}

Buttons come in two sizes, big and small. Just add a `.btn-mini` to use the smaller variation.

{{#example 'html'}}
<button type="button" class="btn">Normal Button</button>
<button type="button" class="btn btn-mini">Small Button</button>
{{/example}}

Secondary buttons can be used as a muted form of the normal button. Just add a `.btn-secondary` class to your button, and you're good to go!

{{#example 'html'}}
<button type="button" class="btn btn-secondary">Secondary Button</button>
<button type="button" class="btn btn-mini btn-secondary">Small Secondary Button</button>
{{/example}}

### Primary

Primary buttons are used to indicate a primary action, such as a form save. Just add a `.btn-primary` class to your button, and you're good to go!

{{#example 'html'}}
<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-mini btn-primary">Small Primary Button</button>
{{/example}}

### Success

Success buttons are used to indicate a positve action, such as choosing yes to a yes or no prompt. Just add a `.btn-success` class to your button, and you're good to go!

{{#example 'html'}}
<button type="button" class="btn btn-success">Success Button</button>
<button type="button" class="btn btn-mini btn-success">Small Success Button</button>
{{/example}}

### Danger

Welcome to the **danger zone**. Danger buttons are red, indicating that the following action may do something potentially dangerous. Just add a `.btn-danger`.

{{#example 'html'}}
<button type="button" class="btn btn-danger">Danger Button</button>
<button type="button" class="btn btn-mini btn-danger">Small Danger Button</button>
{{/example}}

### Button Links

Button links allow you to place buttons that de-emphasize its button appearance, and look more like a link while still maintaining the same vertical text alignment with other buttons.

{{#example 'html'}}
<a href="javascript:void(0)" class="btn btn-link">Button Link</a>
<button type="button" class="btn">Normal Button</button>
{{/example}}

### Disabled

`<button>` elements can be disabled with the `disabled` attribute, and `<a>` elements with the `.disabled` class.

{{#example 'html'}}
<button type="button" class="btn" disabled>Button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>
<button type="button" class="btn btn-primary" disabled>Button</button>
<button type="button" class="btn btn-success" disabled>Button</button>
<button type="button" class="btn btn-danger" disabled>Button</button>
<a href="javascript:void(0)" class="btn-link btn disabled" role="button">Link</a>
{{/example}}

### Loader

`<button>` elements can also contain a loding icon when necessary

{{#example 'html'}}
<button type="button" class="btn" disabled><div class="loader"></div></button>
<button type="button" class="btn btn-secondary" disabled><div class="loader"></div></button>
<button type="button" class="btn btn-primary" disabled><div class="loader"></div></button>
<button type="button" class="btn btn-success" disabled><div class="loader"></div></button>
<button type="button" class="btn btn-danger" disabled><div class="loader"></div></button>
<a href="javascript:void(0)" class="btn-link btn disabled" role="button"><div class="loader"></div></a>
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

Button groups can also use all of the available button colors

{{#example 'html'}}
<div class="btn-group">
  <button class="btn">Button</button>
  <button class="btn">Button</button>
  <button class="btn">Button</button>
</div>
<br/>
<div class="btn-group">
  <button class="btn btn-secondary">Button</button>
  <button class="btn btn-secondary">Button</button>
  <button class="btn btn-secondary">Button</button>
</div>
<br/>
<div class="btn-group">
  <button class="btn btn-primary">Button</button>
  <button class="btn btn-primary">Button</button>
  <button class="btn btn-primary">Button</button>
</div>
<br/>
<div class="btn-group">
  <button class="btn btn-success">Button</button>
  <button class="btn btn-success">Button</button>
  <button class="btn btn-success">Button</button>
</div>
<br/>
<div class="btn-group">
  <button class="btn btn-danger">Button</button>
  <button class="btn btn-danger">Button</button>
  <button class="btn btn-danger">Button</button>
</div>
<br/>
<div class="btn-group">
  <button class="btn btn-link">Button</button>
  <button class="btn btn-link">Button</button>
  <button class="btn btn-link">Button</button>
</div>
{{/example}}

### Block Buttons

You can make any button take up the full width of its container by adding a `.btn-block` class.

{{#example 'html'}}
<button class="btn btn-block">Button</button>
<button class="btn btn-mini btn-block">Mini Button</button>
{{/example}}
 