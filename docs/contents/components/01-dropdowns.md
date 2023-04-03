## Dropdowns

The dropdown component lets you create a toggleable menu for a list of links or actions.

You can create a dropdown component by wrapping the trigger and menu within a `.dropdown`. Your trigger can be anything from a button to a link -- just add the `[data-toggle="dropdown"]` attribute.

{{#example 'html'}}
<div class="dropdown">
  <button type="button" id="thingy" class="btn" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
<div class="dropdown">
  <button type="button" class="btn btn-secondary" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
<div class="dropdown">
  <button type="button" class="btn btn-primary" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
<div class="dropdown">
  <button type="button" class="btn btn-success" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
<div class="dropdown">
  <button type="button" class="btn btn-danger" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
<div class="dropdown">
  <button type="button" class="btn btn-link" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
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

### Caret

The caret on the drop down menu can be positions on the right as well or on both side of the dropm down if appropriate. 

{{#example 'html'}}
<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    <span class="caret"></span> Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    <span class="caret"></span> Dropdown <span class="caret"></span>
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

### Split Dropdown

If you need to split the action for a button and other options on the drop down you can do that.

{{#example 'html'}}
<div class="dropdown">
  <div class="btn-group">
    <button type="button" class="btn">Save</button>
    <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
      <span class="caret"></span>
    </button>
  </div>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
<div class="dropdown">
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Save</button>
    <button type="button" class="btn btn-secondary" data-toggle="dropdown" aria-expanded="false">
      <span class="caret"></span>
    </button>
  </div>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
<div class="dropdown">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-primary" data-toggle="dropdown" aria-expanded="false">
      <span class="caret"></span>
    </button>
  </div>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
<div class="dropdown">
  <div class="btn-group">
    <button type="button" class="btn btn-success">Save</button>
    <button type="button" class="btn btn-success" data-toggle="dropdown" aria-expanded="false">
      <span class="caret"></span>
    </button>
  </div>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
<div class="dropdown">
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Save</button>
    <button type="button" class="btn btn-danger" data-toggle="dropdown" aria-expanded="false">
      <span class="caret"></span>
    </button>
  </div>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
    <li class="divider"></li>
    <li><a href="#">Bacon &amp; Eggs</a></li>
  </ul>
</div>
{{/example}}
