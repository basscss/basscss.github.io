
var titleCase = require('title-case')
var basspkg = require('basscss/package.json').basscss
var modules = require('./modules')
var guides = require('./guides')
var references = require('./references')

function mapPagination(item, i, arr) {
  var previous = arr[i - 1] || false
  var next = arr[i + 1] || false
  if (previous) {
    item.previous = {
      path: previous.path,
      title: previous.title
    }
  }
  if (next) {
    item.next = {
      path: next.path,
      title: next.title
    }
  }
  return item
}

var moduleRoutes = modules.modules
  .map(function(mod) {
    return {
      name: mod.slug,
      path: '/docs/' + mod.slug,
      title: mod.title
    }
  })
  .map(mapPagination)

var guideRoutes = guides
  .map(function(guide) {
    guide.path = '/docs/guides/' + guide.name
    return guide
  })
  .map(mapPagination)

var referenceRoutes = references
  .map(function(reference) {
    reference.path = '/docs/reference/' + reference.name
    return reference
  })

var routes = [{ path: '/', title: 'Basscss' }]
routes.push({ path: '/docs', title: 'Docs' })
routes = routes.concat(moduleRoutes)
routes.push({ path: '/docs/optional-modules', title: 'Optional Modules' })
routes.push({ path: '/docs/guides', name: 'guides', title: 'Guides' })
routes = routes.concat(guideRoutes)
routes.push({ path: '/docs/reference', name: 'reference', title: 'Reference' })
routes = routes.concat(referenceRoutes)

module.exports = routes

