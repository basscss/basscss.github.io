
var moduleInfo = require('get-module-info')
var path = require('path')

var moduleNames = require('basscss/package.json').basscss.modules
var optionalModuleNames = require('basscss/package.json').basscss.optional_modules
var dir = path.join(__dirname, '../node_modules/basscss')

function mapModules(name) {
  var mod = moduleInfo(name, { dirname: dir }) || {}
  mod.name = name.replace(/^basscss\-/, '')
  return mod
}

modules = moduleNames.map(mapModules)
//modules = modules.concat(optionalModuleNames.map(mapModules))

module.exports = modules

