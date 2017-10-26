### Implementing Icons

#### React
If you're using React, a React helper class is available to embed the icons.

```javascript
var React = require('react')
  , Icon = require('daxko.design/lib/icon');

var MyComponent = React.createClass({
  render: function() {
    return (
      <Icon name="chevron-right" />
    );
  }
});
```

#### Html
If you're not using React, you will manually need to include the icon svg set. [CSS Tricks](https://css-tricks.com/svg-use-external-source/) provides some best practice tips for including SVG icons.

{{#example 'html' 'page--dark'}}
<svg class="icon-barcode">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-barcode"></use>
</svg>
{{/example}}


#### Styling the Icons
The icons can be styled naturally through CSS.

```css
[class*=icon-] {
  stroke: #000;
  fill: #000;
  width: 48px;
  height: 48px;
}
```