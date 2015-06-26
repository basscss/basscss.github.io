
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
  {
    name: 'layout',
    title: 'Page Layout',
    md: getMarkdown('layout.md')
  },
  {
    name: 'flex-layout',
    title: 'Flex Object',
    md: getMarkdown('flex-layout.md')
  },
  {
    name: 'ui',
    title: 'UI Elements',
    md: getMarkdown('ui.md')
  },
  {
    name: 'tips',
    title: 'Tips & Tricks',
    md: getMarkdown('tips.md')
  },
  {
    name: 'custom-builds',
    title: 'Custom Builds',
    md: getMarkdown('custom-builds.md')
  },
  {
    name: 'css4',
    title: 'CSS4 Syntax',
    md: getMarkdown('css4.md')
  },
]

module.exports = guides

