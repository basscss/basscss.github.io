
var fs = require('fs')
var path = require('path')

var dir = path.join(__dirname, '../reference/')
var filenames = fs.readdirSync(path.join(__dirname, '../guides'))

function getMarkdown (name) {
  return fs.readFileSync(dir + name, 'utf8')
}

module.exports = [
  {
    name: 'principles',
    title: 'Design Principles',
    md: getMarkdown('principles.md')
  },
  {
    name: 'styles',
    title: 'Table of Styles'
  },
  {
    name: 'color-combinations',
    title: 'Color Combos'
  },
  //{
  //  name: 'resources',
  //  title: 'Tools & Resources'
  //}
]

