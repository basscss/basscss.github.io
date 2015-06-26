
var titleCase = require('title-case')
var basspkg = require('basscss/package.json').basscss
var modules = require('./modules')
var guides = require('./guides')

function mapPagination(item, i, arr) {
  var previous = arr[i - 1] || false
  var next = arr[i + 1] || false
  if (previous) {
    item.previous = {
      path: previous.path,
      name: previous.name
    }
  }
  if (next) {
    item.next = {
      path: next.path,
      name: next.name
    }
  }
  return item
}

var moduleRoutes = modules.map(function(mod) {
  mod.path = '/docs/' + mod.name
  return mod
})

moduleRoutes = moduleRoutes.map(mapPagination)

var guideRoutes = guides.map(function(guide) {
  guide.path = '/docs/guides/' + guide.name
  return guide
})

guideRoutes = guideRoutes.map(mapPagination)

var routes = [{ path: '/', name: 'Basscss' }]
routes.push({ path: '/docs', name: 'Docs' })
routes = routes.concat(moduleRoutes)
routes.push({ path: '/docs/optional-modules', name: 'Optional Modules' })
routes.push({ path: '/docs/guides', name: 'Guides' })
routes = routes.concat(guideRoutes)
routes.push({ path: '/docs/reference', name: 'Reference' })

module.exports = routes

