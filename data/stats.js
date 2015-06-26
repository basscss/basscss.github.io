
var fs = require('fs')
var path = require('path')
var cssstats = require('cssstats')

var css = fs.readFileSync(path.join(__dirname, '../node_modules/basscss/css/basscss.css'), 'utf8')
var stats = cssstats(css)

module.exports = stats

