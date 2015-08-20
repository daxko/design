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

test