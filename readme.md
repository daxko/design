# Usage

## Including the Assets in your Project

You will need to have [node](http://nodejs.org) installed first in order to include these assets.

```bash
$ npm install daxko/design
```

Once installed, you can simply `@import` the global scss file:

```scss
// Import everything
@import "node_modules/daxko.design/scss/global";
```

Or, individual files as you need them:

```scss
// Import only individual files
@import "node_modules/daxko.design/scss/colors";
@import "node_modules/daxko.design/scss/typography";
@import "node_modules/daxko.design/scss/layout";
@import "node_modules/daxko.design/scss/components/buttons";
```

If you're using `node-sass`, you can set the [`includePaths`](https://github.com/sass/node-sass#data) to include `node_modules` as an import directory. This will allow you to import our assets, as well as anything else installed under `node_modules`

```scss
// Import under node_modules
@import "daxko.design/scss/global";
```

# Updating the Documentation

The documentation runs using [metalsmith](https://github.com/segmentio/metalsmith), a static site generator built in node and is dependent upon having [node](http://nodejs.org/) and [grunt](http://gruntjs.com/) installed. If you don't know what any of that means, that's okay. All of the documentation is available under [docs/contents](docs/contents) in [markdown](http://daringfireball.net/projects/markdown/). Any changes made here will be automatically updated on [daxko.github.io/design](http://daxko.github.io/design).

# Contributing

When making changes to the css, be sure to do the following steps:

1. Bump the version number in `package.json`.
2. Run `grunt` before pushing your changes.

If you don't bump the version, other dependencies may not pick up on the latest changes.

## Versioning

Follow the [semver](http://semver.org/) guidelines when making a version bump:

* **x**.0.0 for major releases with breaking changes.
* 0.**x**.0 for minor releases with backwards-compatible changes.
* 0.0.**x** for patch releases with backwards-compatible bug fixes.
