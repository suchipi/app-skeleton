# app-skeleton

A very minimal base frontend JavaScript project configured with some of my preferences.

* webpack (with babel-loader)
* babel-polyfill (core-js's ES2015 Polyfills + Regenerator Runtime)
* `core-js/stage/4` (All Stage 4 ECMAScript Proposals)
* mocha/chai/sinon tests running in karma
* eslint with the airbnb rules
* source maps

### Usage

Some npm scripts are provided:

* `start` - Run development server with watcher on port 8080
* `build` - Build minified js output bundle to `dist/bundle.js`
* `test` - Run tests once
* `lint` - Lint codebase
* `watch-tests` - Run tests repeatedly on file change
