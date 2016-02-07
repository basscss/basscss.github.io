
var pkg = require('basscss/package.json')
var routes = require('./routes')
var modules = require('./modules')
var guides = require('./guides')
var references = require('./references')
var stats = require('./stats')
// var showcase = require('showcase/data')

module.exports = {
  title: 'Basscss',
  name: pkg.name,
  description: pkg.description,
  author: pkg.author.name,
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
  // showcase: showcase,
  links: [
    { path: '/stats', name: 'stats', title: 'Stats' },
    { path: '/showcase', name: 'showcase', title: 'Showcase' },
    { path: '/themes', name: 'themes', title: 'Themes' },
    { path: '/customize', name: 'customize', title: 'Customize' }
  ]
}

