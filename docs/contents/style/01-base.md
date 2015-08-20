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
