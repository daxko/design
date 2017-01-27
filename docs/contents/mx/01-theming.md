## Theming

With MX, themes can be created to add accent colors that match a client's branding.

When styling components, a good rule of thumb to follow is that _actions_ should use a primary color, while accent elements should use a secondary color.

### Theme Colors

For simple text components, you can use a <code>.theme--_**level**_-_**shade**_</code> class to add accent colors to specific elements. There's 2 levels of color, `primary` and `secondary` along with 3 shades of color, `light`, `medium`, and `dark`.

{{#example 'html' 'page--dark'}}
<h5 class="theme--primary-dark">Theme Primary Color (Dark)</h5>
<h5 class="theme--primary-med">Theme Primary Color (Medium)</h5>
<h5 class="theme--primary-light">Theme Primary Color (Light)</h5>
<h5 class="theme--secondary-dark">Theme Secondary Color (Dark)</h5>
<h5 class="theme--secondary-med">Theme Secondary Color (Medium)</h5>
<h5 class="theme--secondary-light">Theme Secondary Color (Light)</h5>

<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#" class="dropdown-menu-item">Bacon</a></li>
    <li><a href="#" class="dropdown-menu-item">Ham</a></li>
    <li><a href="#" class="dropdown-menu-item">Sausage</a></li>
  </ul>
</div>
{{/example}}

### Advanced Theming

For more complex theming, such as changing colors based off of state or background colors, you can add your theme colors to `mx_themes/_theme.scss`. Only theme colors should be placed in this file. Positioning and layout values should otherwise be placed in their component file.