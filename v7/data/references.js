
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
    md: getMarkdown('principles.md'),
    description: 'The principles behind Basscss'
  },
  {
    name: 'styles',
    title: 'Table of Styles',
    description: 'Index of all declarations'
  },
  {
    name: 'color-combinations',
    title: 'Color Combos',
    description: 'List of readable color combinations'
  },
  //{
  //  name: 'resources',
  //  title: 'Tools & Resources'
  //}
]

