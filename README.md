# tinkerhub-build

Build utilities for other Tinkerhub repositories. Makes it easier to setup
a Gulp buildfile that:

* Uses ES6 to build
* Runs JSHint
* Has error handling with notifications

## Setup

```
$ npm install --save-dev gulp tinkerhub-build
```

Create a `gulpfile.js` simply containing:

```
require('tinkerhub-build')();
```

Add `dist` to `.npmignore` and `.gitignore`.

Also update `package.json` with something similar to this:

```
"main": "dist/mainscripthere.js",
"scripts": {
  "prepublish": "gulp build"
},
```

## Running

* `gulp build` will build your script
* `gulp dev` will start dev-mode and build on file changes
