# Getting Started

You'll need to install [nodejs](http://nodejs.org/) if it isn't already installed.

From there, you'll need to install [grunt](http://gruntjs.com/) globally as well as the npm dependencies.

```bash
npm install -g grunt-cli
npm install
```

# Running the site

This guide runs using [metalsmith](https://github.com/segmentio/metalsmith), a static site generator built in node. However, we've wired up a few things via grunt so you can develop locally.

`grunt preview`

Allows you to edit on the fly and access the static site via http://localhost:3000.

`grunt watch`

Allows you to edit sass files for them to be automatically compiled.

`grunt build`

Compiles the site down to the static assets.

# Contributing

When making changes to the css, be sure to do the following steps:

1. Bump the version number in `package.json`.
2. Run `grunt` before pushing your changes.

If you don't bump the version, other dependencies may not pick up on the latest changes.

## Versioning

Follow the [semver](http://semver.org/) guidelines when making a version bump:

* **x**.0.0 for major releases with breaking changes.
* 0.**x**.0 for minor releases with backwards-compatible changes.
* 0.0.**x** for patch releases with for backwards-compatible bug fixes.