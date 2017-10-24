## Dropdowns

The dropdown component lets you create a toggleable menu for a list of links or actions.

You can create a dropdown component by wrapping the trigger and menu within a `.dropdown`. Your trigger can be anything from a button to a link -- just add the `[data-toggle="dropdown"]` attribute.

{{#example 'html'}}
<div class="dropdown">
  <button 
    class="btn" 
    type="button" 
    data-toggle="dropdown" 
    aria-haspopup="true" 
    aria-expanded="false">
    Dropdown 
    <span class="caret"></span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Bacon</a>
    <a class="dropdown-item" href="#">Ham</a>
    <a class="dropdown-item" href="#">Sausage</a>
  </div>
</div>
{{/example}}

### Alignment

By default, dropdown menus are automatically aligned along the left side of its parent. You can change the positioning to the right side by adding `.right` to `.dropdown-menu`.

{{#example 'html'}}
<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu right">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
{{/example}}

### Divider

Need to add some spacing to your menu? You can add a `.divider` class to a `li` element to separate different series of links.

{{#example 'html'}}
<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
{{/example}}
