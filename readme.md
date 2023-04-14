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

The documentation runs using [metalsmith](https://github.com/segmentio/metalsmith), a static site generator built in node and is dependent upon having [node](http://nodejs.org/) and [grunt](http://gruntjs.com/) installed. If you don't know what any of that means, that's okay. All of the documentation is available under [docs/contents](docs/contents) in [markdown](http://daringfireball.net/projects/markdown/).

The documentation site at [daxko.github.io/design](http://daxko.github.io/design) is updated through a deploy using the `npm run deploy` command. This runs a powershell script to build and deploy the assets from the local environment to the Github pages site. Please note that this will deploy whatever local change set that the local environment has. Therefore this should only be done from the master branch without any local changes. 

# Integrating changes into Operations

The Operations project pulls in changes from this project from a git reference in NPM. This reference is tied to a specific tagged version in this repository. When releasing new updates into the master branch of this repository they must be tagged with the appropriate new version number. This version number should match the one updated in the package.json file as described below. 

Once the tag is created and pushed up to central repo the reference in Operations can be updated. Then `npm install` can be run to pull in the updates. This update to the package.json file will likely need to be done in a separate branch from any other on going work. This way all ongoing work can quickly benefit from and adapt to these changes not just a single branch. PR's for these changes should be created an reviewed as normal.

# Contributing

When making changes to the css, be sure to do the following steps:

1. Bump the version number in `package.json`.
2. Run `grunt` before pushing your changes.

If you don't bump the version, other dependencies may not pick up on the latest changes.

When making larger changes and there is often a need to preview changes locally before releasing. This is done with the `grunt preview` command. This will start a local dev server that will watch for changes in the code and perform automatic rebuilds as development continues.

## Versioning

Follow the [semver](http://semver.org/) guidelines when making a version bump:

* **x**.0.0 for major releases with breaking changes.
* 0.**x**.0 for minor releases with backwards-compatible changes.
* 0.0.**x** for patch releases with backwards-compatible bug fixes.
