
var basspkg = require('basscss/package.json').basscss
var guides = require('./guides')

var moduleRoutes = basspkg.modules.map(function(m) {
  var name = m.replace(/^basscss\-/, '')
  return {
    name: name,
    path: '/docs/' + name
  }
})
var optionalModuleRoutes = basspkg.optional_modules.map(function(m) {
  var name = m.replace(/^basscss\-/, '')
  return {
    name: name,
    path: '/docs/' + name
  }
})

var guideRoutes = guides.map(function(guide) {
  return {
    name: guide.name,
    path: '/docs/guides/' + guide.name
  }
})

var routes = [{ path: '/', name: 'Basscss' }]
routes.push({ path: '/docs', name: 'Docs' })
routes = routes.concat(moduleRoutes)
//routes = routes.concat(optionalModuleRoutes)
routes.push({ path: '/docs/guides', name: 'Guides' })
routes = routes.concat(guideRoutes)
routes.push({ path: '/docs/reference', name: 'Reference' })

module.exports = routes

