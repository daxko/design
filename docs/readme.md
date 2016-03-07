# Contributing to the Style Guide Documentation

So you want to contribute to the style guide? There's a few things you need to know.

## Updating the Documentation

All of our documentation is written in [markdown](http://daringfireball.net/projects/markdown/) available under the [contents](/contents) folder. We want our documentation to be easy to update, and markdown allows us to try and keep things simple.

If you need to add new files, be sure to include `.md` as an extension for your new file.

Some of the files are prefixed with double digit numbers (e.g. `01-`). These files are concatenated together into a single file which allows us to keep individual files smaller, while still being able to keep track changes on the smaller components. You can ensure content is appended in the correct order by changing the order of the number for each file in that folder.

### Helpers

Beyond markdown, we've added a few helpers that make it easy to keep the documentation clean and simple.

#### Example Templates

Who wants to write code twice? The example block allows you to write any code examples to be converted into actual HTML and formatted HTML markup available for copy and paste examples.

```handlebars
{{#example 'html'}}
<div class="dropdown">
  <button type="button" class="btn" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Bacon</a></li>
    <li><a href="#">Ham</a></li>
    <li><a href="#">Sausage</a></li>
  </ul>
</div>
{{/example}}
```

#### Collapse Code Templates

Using the above example, you can trim longer code blocks to only show the actual relevant code while still retaining the display value of the component. Just use `<!-- ... -->` and `<!-- /... -->` to mark the areas you don't want to collapse for the example markup.

```handlebars
{{#example 'html'}}
<ul class="list">
  <!-- ... -->
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <li class="list-item">List Item</li>
  <!-- /... -->
</ul>
{{/example}}
```

#### Hide Code Templates

You can also hide specific elements for display instead of just collapsing them if you need to include structure elements such as `<p>` or `<div>` to only show code revelant to the example you're using.

```handlebars
{{#example 'html'}}
<!-- hide --><p><!-- /hide -->
<span class="status-flag tooltip" aria-label="Inactive"></span> Inactive User
<!-- hide --></p><!-- /hide -->
```

#### Table of Content Headers

Any `##` and `###` headers will automatically be converted into table of content links for specific pages.

## Running the Documentation Locally

If you want explore the documentation on your own, we've wired up a few things via grunt so you can develop locally. But you'll need to run a few commands first to get started:

```bash
$ npm install -g grunt-cli
$ npm install
```

`grunt preview`

Allows you to edit on the fly and access the static site via http://localhost:3000.

`grunt watch`

Allows you to edit sass files for them to be automatically compiled.

`grunt build`

Compiles the site down to the static assets.