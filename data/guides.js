
var fs = require('fs')
var path = require('path')

var dir = path.join(__dirname, '../guides/')

function getMarkdown (name) {
  return fs.readFileSync(dir + name, 'utf8')
}

var guides = [
  {
    name: 'basics',
    title: 'Basics',
    md: getMarkdown('basics.md'),
    description: 'Understanding the basics of designing for the web with CSS is essential to using Basscss effectively. This guide covers the fundamentals to help get you started.'
  },
  {
    name: 'layout',
    title: 'Page Layout',
    md: getMarkdown('layout.md'),
    description: 'Creating page layouts in Basscss is incredibly fast and flexible. This guide will walk you through common layout patterns to create an entire page with a basic information hierarchy.'
  },
  {
    name: 'flex-layout',
    title: 'Flex Object',
    md: getMarkdown('flex-layout.md'),
    description: 'Solving page-level and micro layout problems with the flex object and other utilities'
  },
  {
    name: 'ui',
    title: 'UI Elements',
    md: getMarkdown('ui.md'),
    description: 'Creating user interface elements while keeping CSS bloat to a minimum and allowing for flexibility in making iterative design decisions'
  },
  {
    name: 'tips',
    title: 'Tips & Tricks',
    md: getMarkdown('tips.md'),
    description: 'Basscss is a versatile starting point for any project. These tips and tricks will help you build on top of its foundation in an elegant and maintainable way.'
  },
  {
    name: 'custom-builds',
    title: 'Custom Builds',
    md: getMarkdown('custom-builds.md'),
    description: 'Using NPM, Cssnext, Bower, Sass, and other tools to customize Basscss for your needs.'
  },
  {
    name: 'future-css',
    title: 'Future CSS Syntax',
    md: getMarkdown('future-css.md'),
    description: 'Getting started with bleeding edge CSS features, including custom properties and custom media queries'
  },
]

module.exports = guides

