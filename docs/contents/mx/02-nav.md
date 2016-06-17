## Nav

The nav component is a _**mobile only**_ fixed header that gives the current page's context along with navigational links.

{{#example 'html' 'page--dark'}}
<!-- hide -->
<div class="mobile">
  <div class="screen">
<!-- /hide -->
<nav class="nav" role="navigation">
  <button type="button" class="nav--left">
    <svg class="icon"><!-- ... --><use xlink:href="/images/icons.svg#icon-chevron-left"></use><!-- /... --></svg>
  </button>
  <div class="nav--title">Association Name</div>
  <button type="button" class="nav--right">
    <svg class="icon"><!-- ... --><use xlink:href="/images/icons.svg#icon-pin"></use><!-- /... --></svg>
  </button>
</nav>
<!-- hide -->
  </div>
</div>
<!-- /hide -->
{{/example}}