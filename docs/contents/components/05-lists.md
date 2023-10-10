## Lists

Need to create a list component? Use `.list`. Each list item should additionally have `.list-item` for consistent padding.

{{#example 'html'}}
<ul class="list">
  <li class="list-item">List Item</li>
  <!-- ... -->
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <!-- /... -->
</ul>
{{/example}}

You can also use list items in combination with `<a>` elements to create interactive list components with icons.

{{#example 'html'}}
<ul class="list">
  <li>
    <a href="#" class="list-item">
      List Item
      <div class="list-icons pull-right tooltip" aria-label="Edit"><i class="fa-regular fa-pen"></i></div>
    </a>
  </li>
  <!-- ... -->
  <li>
    <a href="#" class="list-item">
      List Item
      <div class="list-icons pull-right tooltip" aria-label="Edit"><i class="fa-regular fa-pen"></i></div>
    </a>
  </li>
  <li>
    <a href="#" class="list-item">
      List Item
      <div class="list-icons pull-right tooltip" aria-label="Edit"><i class="fa-regular fa-pen"></i></div>
    </a>
  </li>
  <!-- /... -->
</ul>
{{/example}}

### Bordered Lists

If you need borders around the list, use `.list-bordered`.

{{#example 'html'}}
<ul class="list list-bordered">
  <li class="list-item">List Item</li>
  <!-- ... -->
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <!-- /... -->
</ul>
{{/example}}

### List Header

You can also have a list header by including a preceding element with a `.list-header` class.

{{#example 'html'}}
<div class="list-header">List Header</div>
<ul class="list">
  <li class="list-item">List Item</li>
  <!-- ... -->
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <!-- /... -->
</ul>
{{/example}}

{{#example 'html'}}
<div class="list-header list-header-bordered">List Header</div>
<ul class="list list-bordered">
  <li class="list-item">List Item</li>
  <!-- ... -->
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <!-- /... -->
</ul>
{{/example}}
