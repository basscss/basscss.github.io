
var pkg = require('basscss/package.json')
var routes = require('./routes')
var modules = require('./modules')
var guides = require('./guides')
var references = require('./references')
var stats = require('./stats')

module.exports = {
  title: 'Basscss',
  name: pkg.name,
  description: pkg.description,
  author: pkg.author,
  keywords: pkg.keywords,
  version: pkg.version,
  homepage: pkg.homepage,
  repository: pkg.repository,
  routes: routes,
  modules: modules.modules,
  optionals: modules.optionals,
  guides: guides,
  references: references,
  stats: stats,
}

