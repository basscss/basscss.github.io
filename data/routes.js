
var basspkg = require('basscss/package.json').basscss

var modules = basspkg.modules.map(function(m) {
  return '/docs/' + m.replace(/^basscss\-/, '')
})


var routes = ['/']
routes.push('/docs')
routes = routes.concat(modules)
routes.push('/docs/guides')
routes.push('/docs/reference')

module.exports = routes

