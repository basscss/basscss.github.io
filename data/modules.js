
var path = require('path');
var moduleInfo = require('get-module-info');
var titleCase = require('title-case');
var marked = require('marked');
var renderer = require('./marked-renderer');
var modules = require('basscss/package.json').basscss.modules;
var obj = {};

modules = modules.map(function(name) {
  var mod = moduleInfo(name, { dirname: path.join(__dirname, '../node_modules/basscss') });
  var title = mod.title.replace(/^Basscss\-/, '');
  mod.title = titleCase(title);
  mod.body = marked(mod.readme, { renderer: renderer });
  mod.content = mod.body;
  mod.path = '/' + mod.name.replace(/^basscss\-/,'');
  mod.module = true;
  return mod;
});


module.exports = modules;

