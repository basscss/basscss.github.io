
var pkg = require('basscss/package.json')
var routes = require('./routes')
var modules = require('./modules')
var guides = require('./guides')
var stats = require('./stats')

module.exports = {
  title: 'Basscss',
  name: pkg.name,
  description: pkg.description,
  author: pkg.author,
  keywords: pkg.keywords,
  version: pkg.version,
  routes: routes,
  modules: modules,
  stats: stats,
}

