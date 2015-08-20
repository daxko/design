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
