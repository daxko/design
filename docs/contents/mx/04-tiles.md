## Tiles

Tiles are used to group and display a list of tiles of related content using a `.tile` class. Tiles work best visually inside a dark contrasting element to help provide spacing between groups of tiles.

{{#example 'html' 'page--dark'}}
<div class="tile">
  <h5 class="theme--secondary-med">Personal Training - 1 Session</h5>
  <ul>
    <li>Jan 1 - 31, 2016</li>
    <li>Ages 13+</li>
  </ul>
</div>
<div class="tile"><!-- ... -->
  <h5 class="theme--secondary-med">Personal Training - 3 Sessions</h5>
  <ul>
    <li>Jan 1 - 31, 2016</li>
    <li>Ages 13+</li>
  </ul>
<!-- /... --></div>
<div class="tile"><!-- ... -->
  <h5 class="theme--secondary-med">Personal Training - 5 Sessions</h5>
  <ul>
    <li>Jan 1 - 31, 2016</li>
    <li>Ages 13+</li>
  </ul>
<!-- /... --></div>
{{/example}}

### Tile Headers

You can separate specific groups of tiles by including a `.tile--header` element between the tiles you want to group.

{{#example 'html' 'page--dark'}}
<div class="tile--header">3pm</div>
<div class="tile"><!-- ... -->
  <h5 class="theme--secondary-med">Open Gym</h5>
  3pm - 4:30 <span class="secondary">(1 hour 30 minutes)</span>
<!-- /... --></div>
<div class="tile"><!-- ... -->
  <h5 class="theme--secondary-med">Extreme Zumba</h5>
  3:15pm - 4:00 <span class="secondary">(45 minutes)</span>
<!-- /... --></div>
<div class="tile--header">4pm</div>
<div class="tile"><!-- ... -->
  <h5 class="theme--secondary-med">Underwater Basket Weaving</h5>
  4:05pm - 5:00 <span class="secondary">(55 minutes)</span>
<!-- /... --></div>
{{/example}}

### Tile Descriptions

Additionally, tiles can include descriptions that give additional context for each tile.

{{#example 'html' 'page--dark'}}
<div class="tile">
  <!-- ... -->
  <h5 class="theme--secondary-med">Underwater Basket Weaving</h5>
  4:05pm - 5:00 <span class="secondary">(55 minutes)</span>
  <!-- /... -->
  <div class="tile--description">
    Join your friends as you learn to weave intricate baskets in a harsh underwater environment.
    (Note: Underwater breathing apparatus not included)
  </div>
</div>
{{/example}}