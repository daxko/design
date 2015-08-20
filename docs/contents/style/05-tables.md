## Tables

Since so many different components use tables for layout, we don't want to override any default styles that may come with those components. The use of styled tables are opt-in by adding a `.table` class to any table.

### Basic Table

{{#example 'html'}}
<table class="table">
  <thead>
    <tr>
      <th>Room Name</th>
      <th>Color</th>
      <th>Extension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red Velvet</td>
      <td>#ee264e</td>
      <td>x0715</td>
    </tr>
    <!-- ... -->
    <tr>
      <td>Banana Pudding</td>
      <td>#efad1c</td>
      <td>x0713</td>
    </tr>
    <tr>
      <td>Key Lime</td>
      <td>#b3ba5a</td>
      <td>x0712</td>
    </tr>
    <tr>
      <td>Cotton Candy</td>
      <td>#a5dbd8</td>
      <td>x0714</td>
    </tr>
    <!-- /... -->
  </tbody>
</table>
{{/example}}

### Bordered

Need some borders around your table? Add `.table-bordered`.

{{#example 'html'}}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Room Name</th>
      <th>Color</th>
      <th>Extension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red Velvet</td>
      <td>#ee264e</td>
      <td>x0715</td>
    </tr>
    <!-- ... -->
    <tr>
      <td>Banana Pudding</td>
      <td>#efad1c</td>
      <td>x0713</td>
    </tr>
    <tr>
      <td>Key Lime</td>
      <td>#b3ba5a</td>
      <td>x0712</td>
    </tr>
    <tr>
      <td>Cotton Candy</td>
      <td>#a5dbd8</td>
      <td>x0714</td>
    </tr>
    <!-- /... -->
  </tbody>
</table>
{{/example}}

### Hover Rows

You can also enable hover state on table rows with a `.table-hover` class.

{{#example 'html'}}
<table class="table table-hover">
  <thead>
    <tr>
      <th>Room Name</th>
      <th>Color</th>
      <th>Extension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red Velvet</td>
      <td>#ee264e</td>
      <td>x0715</td>
    </tr>
    <!-- ... -->
    <tr>
      <td>Banana Pudding</td>
      <td>#efad1c</td>
      <td>x0713</td>
    </tr>
    <tr>
      <td>Key Lime</td>
      <td>#b3ba5a</td>
      <td>x0712</td>
    </tr>
    <tr>
      <td>Cotton Candy</td>
      <td>#a5dbd8</td>
      <td>x0714</td>
    </tr>
    <!-- /... -->
  </tbody>
</table>
{{/example}}

### Condensed

Need to save some space? You can make tables more compact by adding `.table-condensed`.

{{#example 'html'}}
<table class="table table-condensed">
  <thead>
    <tr>
      <th>Room Name</th>
      <th>Color</th>
      <th>Extension</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Red Velvet</td>
      <td>#ee264e</td>
      <td>x0715</td>
    </tr>
    <!-- ... -->
    <tr>
      <td>Banana Pudding</td>
      <td>#efad1c</td>
      <td>x0713</td>
    </tr>
    <tr>
      <td>Key Lime</td>
      <td>#b3ba5a</td>
      <td>x0712</td>
    </tr>
    <tr>
      <td>Cotton Candy</td>
      <td>#a5dbd8</td>
      <td>x0714</td>
    </tr>
    <!-- /... -->
  </tbody>
</table>
{{/example}}
