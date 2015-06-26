
var fs = require('fs')
var path = require('path')

var dir = path.join(__dirname, '../guides/')
var filenames = fs.readdirSync(path.join(__dirname, '../guides'))

function getMarkdown (name) {
  return fs.readFileSync(dir + name, 'utf8')
}

var guides = [
  {
    name: 'basics',
    title: 'Basics',
    md: getMarkdown('basics.md')
  },
]

module.exports = guides

