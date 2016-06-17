## Page Layouts

Page layouts are a **mobile only** component allowing you to layout elements following the nav component. Include a `.page` class to your element to automatically account for the correct spacing and scrolling after the nav.

{{#example 'html' 'page--dark'}}
<!-- hide -->
<div class="mobile">
  <div class="screen">
<!-- /hide -->
<nav class="nav"><!-- ... --><div class="nav--title">Association Name</div><!-- /... --></nav>
<div class="page">
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
</div>
<!-- hide -->
  </div>
</div>
<!-- /hide -->
{{/example}}

### Advanced Layouts

The page layout can be customized to set the background color or adjust the padding, depending on the type of content you want to display.

### Dark Background

Include a dark background by adding a `.page--dark` to your element.

{{#example 'html' 'page--dark'}}
<!-- hide -->
<div class="mobile">
  <div class="screen">
<!-- /hide -->
<nav class="nav"><!-- ... --><div class="nav--title">Association Name</div><!-- /... --></nav>
<div class="page page--dark">
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
</div>
<!-- hide -->
  </div>
</div>
<!-- /hide -->
{{/example}}

### Condensed Padding

Condense the default padding with `.page--small-padding`.

{{#example 'html' 'page--dark'}}
<!-- hide -->
<div class="mobile">
  <div class="screen">
<!-- /hide -->
<nav class="nav"><!-- ... --><div class="nav--title">Association Name</div><!-- /... --></nav>
<div class="page page--small-padding">
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
</div>
<!-- hide -->
  </div>
</div>
<!-- /hide -->
{{/example}}

### No Padding

Remove any padding with `.page--full-width` allowing your content to fill the full width of the device.

{{#example 'html' 'page--dark'}}
<!-- hide -->
<div class="mobile">
  <div class="screen">
<!-- /hide -->
<nav class="nav"><!-- ... --><div class="nav--title">Association Name</div><!-- /... --></nav>
<div class="page page--full-width">
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
</div>
<!-- hide -->
  </div>
</div>
<!-- /hide -->
{{/example}}

### Full Screen

For content that does not need to account for the nav element, you can use `.fullscreen`.

{{#example 'html' 'page--dark'}}
<!-- hide -->
<div class="mobile">
  <div class="screen">
<!-- /hide -->
<nav class="nav"><!-- ... --><div class="nav--title">Association Name</div><!-- /... --></nav>
<div class="fullscreen">
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
  <div class="tile"><!-- ... --><div class="block-mockup"></div><!-- /... --></div>
</div>
<!-- hide -->
  </div>
</div>
<!-- /hide -->
{{/example}}