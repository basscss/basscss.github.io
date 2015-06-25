
var pkg = require('../package.json')
var routes = require('./routes')
var modules = require('./modules')
var guides = require('./guides')

module.exports = {
  title: 'Basscss',
  name: pkg.name,
  description: pkg.description,
  author: pkg.author,
  keywords: pkg.keywords,
  version: pkg.version,
  routes: routes,
  modules: modules
}

