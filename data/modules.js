
var path = require('path')
var moduleInfo = require('get-module-info')
var titleCase = require('title-case')
var marked = require('marked')
var renderer = require('./marked-renderer')
var bmods = require('basscss/package.json').basscss
var obj = {}

function getModules(name) {
  var opts = opts || {}
  var mod = moduleInfo(name, { dirname: path.join(__dirname, '../node_modules/basscss') })
  var title = mod.title.replace(/^Basscss\-/, '')
  mod.title = titleCase(title)
  mod.body = marked(mod.readme, { renderer: renderer })
  mod.content = mod.body
  mod.path = '/' + mod.name.replace(/^basscss\-/,'')
  mod.module = true
  return mod
}

var modules = bmods.modules.map(getModules)
var optionals = bmods.optional_modules.map(getModules)
optionals = optionals.map(function(m) {
  m.optional = true
  return m
})


module.exports = {
  modules: modules,
  optionals: optionals
}

