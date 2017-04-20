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

### Button Links

Button links allow you to place buttons that de-emphasize its button appearance, and look more like a link while still maintaining the same vertical text alignment with other buttons.

{{#example 'html'}}
<a href="#" class="btn btn-link">Button Link</a>
<button type="button" class="btn">Normal Button</button>
{{/example}}

### Disabled

`<button>` elements can be disabled with the `disabled` attribute, and `<a>` elements with the `.disabled` class.

{{#example 'html'}}
<button type="button" class="btn" disabled>Disabled Button</button>
<a href="#" class="btn-link btn disabled" role="button">Disabled Link</a>
{{/example}}

Disabled styling is also applied to primary and danger buttons:

{{#example 'html'}}
<button type="button" class="btn btn-primary" disabled>Primary Disabled Button</button>
{{/example}}

{{#example 'html'}}
<button type="button" class="btn btn-danger" disabled>Danger Disabled Button</button>
{{/example}}

### Block Buttons

You can make any button take up the full width of its container by adding a `.btn-block` class.

{{#example 'html'}}
<button class="btn btn-block">Button</button>
<button class="btn btn-mini btn-block">Mini Button</button>
{{/example}}

