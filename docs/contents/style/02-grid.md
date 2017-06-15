## Layouts

### Container

Center page content with a `.container` class. This container will automatically take up the full width of the screen up to 1200px. The default width can be overwritten by the `$container-width` sass variable.

```html
<div class="container">
  <!-- contents to be centered -->
</div>
```

### Grid

The grid is a pretty standard 12 column responsive grid -- you create a wrapper `.grid` with individual columns. Columns are placed using `inline-block` instead of floats which allows for a little bit cleaner markup and an easier way to handle certain layouts at smaller viewports.

Since we're setting the box sizing to `border-box`, the grid sizes can include the gutters as part of the column instead of trying to perform complex margin calculations. The size of the gutters can be adjusted by changing the `$grid-gutters` sass variable.

{{#example 'html' 'grid-example'}}
<div class="grid">
  <div class="col-4">.col-4</div>
  <div class="col-8">.col-8</div>
  <div class="col-3">.col-3</div>
  <div class="col-9">.col-9</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
  <div class="col-2">.col-2</div>
</div>
{{/example}}

<div class="alert alert-warning">
  <strong>Heads Up!</strong> To collapse white space between grid columns, the font-size for grids is set to 0, then reset back to `1rem` for each individual columns. Font sizes will not inherit from parents outside of the grid, and will need to be adjusted for components inside each grid cell.
</div>

### Column Alignment

Columns can be centered by adding a `.center` class to the column.

{{#example 'html' 'grid-example'}}
<div class="grid center">
  <div class="col-4">Centered</div>
  <div class="col-4">Columns</div>
</div>
{{/example}}

You can also left or right align columns by adding a `.left` or `.right` class respectively.

{{#example 'html' 'grid-example'}}
<div class="grid right">
  <div class="col-2">.col-2</div>
  <div class="col-3">.col-3</div>
</div>
{{/example}}

{{#example 'html' 'grid-example'}}
<div class="grid left">
  <div class="col-2">.col-2</div>
  <div class="col-3">.col-3</div>
</div>
{{/example}}

You can also adjust the vertical alignment of grid columns with `.top`, `.middle`, or `.bottom`. By default grid columns will be aligned across the top of the grid rows.

{{#example 'html' 'grid-example'}}
<div class="grid middle">
  <div class="col-6"><h1>Big column</h1></div>
  <div class="col-6"><small>Small column</small></div>
</div>
{{/example}}

### Responsive Grids

<div class="alert alert-info">
  <strong>Heads Up!</strong> You responsive layouts should ideally be based on the context of your content, and not the device. The classes provided below are simply helpers to quickly iterate.
</div>

Out of the box, responsive breakpoints are determined from the `$responsive-breakpoints` sass map.

```scss
{{readfile "/scss/_breakpoints.scss"}}
```

Grids are built from the bottom up, starting out from small widths to larger widths -- allowing you to size the grid columns differently based on your content.

<table class="table table-bordered">
  <thead>
    <tr>
      <th></th>
      <th>All sizes</th>
      <th>Small size <div><small>(≥ 800px)</small></div></th>
      <th>Medium size <div><small>(≥ 1000px)</small></div></th>
      <th>Large size <div><small>(≥ 1200px)</small></div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Class Prefix</th>
      <td>`.col-`</td>
      <td>`.col-sm-`</td>
      <td>`.col-md-`</td>
      <td>`.col-lg-`</td>
    </tr>
  </tbody>
</table>

The columns below will stack for sizes less than 800px, while turning into a 3-column layout for anything 800px and up.

{{#example 'html' 'grid-example'}}
<div class="grid">
  <div class="col-12 col-sm-4">col 1</div>
  <div class="col-12 col-sm-4">col 2</div>
  <div class="col-12 col-sm-4">col 3</div>
</div>
{{/example}}