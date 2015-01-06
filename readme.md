# Getting Started

You'll need to install [nodejs](http://nodejs.org/) if it isn't already installed.

From there, you'll need to install [grunt](http://gruntjs.com/) globally as well as the npm dependencies.

```bash
npm install -g grunt-cli
npm install
```

# Running the site

This guide runs using [wintersmith](https://github.com/jnordberg/wintersmith), a static site generator built in node. However, we've wired up a few things via grunt so you can develop locally.

`grunt preview`

Allows you to edit on the fly and access the static site via http://localhost:8080.

`grunt watch`

Allows you to edit sass files for them to be automatically compiled.

`grunt build`

Compiles the site down to the static assets.