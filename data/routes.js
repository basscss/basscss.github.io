
var basspkg = require('basscss/package.json').basscss

var moduleRoutes = basspkg.modules.map(function(m) {
  return '/docs/' + m.replace(/^basscss\-/, '')
})
var optionalModuleRoutes = basspkg.optional_modules.map(function(m) {
  return '/docs/' + m.replace(/^basscss\-/, '')
})

var routes = ['/']
routes.push('/docs')
routes = routes.concat(moduleRoutes)
//routes = routes.concat(optionalModuleRoutes)
routes.push('/docs/guides')
routes.push('/docs/reference')

module.exports = routes

