'use strict';
var Promise = require('bluebird');
var writeFile = Promise.promisify(require('fs').writeFile);
var sublimeSnippetTemplate = require('./sublimeSnippetGenerator');
var path = require('path');
var writeSnippetFile = function (snipObj) {
  return writeFile(path.join(__dirname + "/../tmp/" + escape(snipObj.title) + ".sublime-snippet"),
    sublimeSnippetTemplate(snipObj),
    'utf8');
};
var zipFolder = function () {};
var cleanFolder = function () {};

module.exports = {
  writeSnippetFile: writeSnippetFile
};
