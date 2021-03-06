'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var md = markdownIt();

  md.builder = function markdownViewBuilder(content) {
    return new Promise(function (resolve, reject) {
      var view = document.createElement('div');
      view.setAttribute('data-content-url', content.url);
      view.setAttribute('data-content-type', content.blob.type);

      var reader = new FileReader();

      reader.onloadend = function (evt) {
        view.innerHTML = md.render(evt.target.result);

        var links = Array.from(view.querySelectorAll('a'));
        links.forEach(function (link) {
          link.addEventListener('click', function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            // TODO: Resolve relative to base passed in by containing document.
            var href = url.resolve(content.url, link.getAttribute("href"));
            jsua.fetch(href, { origin: link });
          });
        });

        var images = Array.from(view.querySelectorAll('img'));
        images.forEach(function (img) {
          // TODO: Resolve relative to base passed in by containing document.
          var src = url.resolve(content.url, img.getAttribute("src"));
          img.src = src;
        });

        resolve(view);
      };

      reader.readAsText(content.blob);
    });
  };

  return md;
};

var markdownIt = require('markdown-it');
var jsua = require('@lynx-json/jsua');
var url = require("url");