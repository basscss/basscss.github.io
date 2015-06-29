
var titleCase = require('title-case')
var moduleInfo = require('get-module-info')
var path = require('path')

var moduleNames = require('basscss').modules
var optionalModuleNames = require('basscss').optional_modules
var dir = path.join(__dirname, '..')

function mapModules(name) {
  var mod = moduleInfo(name, { dirname: dir }) || {}
  mod.title = titleCase(mod.title.replace(/^Basscss\-/, '').replace(/\-/, ' '))
  mod.slug = name.replace(/^basscss\-/, '')
  return mod
}

modules = moduleNames.map(mapModules)
optionals = optionalModuleNames.map(mapModules)

module.exports = {
  modules: modules,
  optionals: optionals
}

