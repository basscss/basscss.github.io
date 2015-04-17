
var filesize = require('filesize');
var titleCase = require('title-case');
var hljs = require('highlight.js');

module.exports = {
  removePrefix: function(string) {
    if (!string) return false;
    var result = string.replace(/^Basscss|^basscss-/, '');
    return result;
  },
  fileSize: filesize,
  titleCase: titleCase,
  highlightCss: function(string) {
    return hljs.highlight('css', string).value;
  },
};
