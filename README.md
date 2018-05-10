JSUA markdown-it
=================================================

The `jsua-markdown-it` module provides a JSUA builder registration function
for the `markdown-it` module.

Usage
-------------------------------------------------

```js
var jsua = require('@lynx-json/jsua');
var md = require('jsua-markdown-it')();

jsua.building.register('text/markdown', md.builder);
```

Or with options:

```js
var jsua = require('@lynx-json/jsua');
var md = require('jsua-markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

jsua.building.register('text/markdown', md.builder);
```

> See [markdown-it](https://www.npmjs.com/package/markdown-it) for full documentation
> on options and other usage.

### Plugins

You can use [markdown-it plugins](https://www.npmjs.com/browse/keyword/markdown-it-plugin) as follows:

```js
var jsua = require('@lynx-json/jsua');
var md = require('jsua-markdown-it')().use(require('markdown-it-highlightjs'));

jsua.building.register('text/markdown', md.builder);
```
