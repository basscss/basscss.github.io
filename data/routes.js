
var _ = require('lodash');
var modules = require('./modules');


module.exports = [
  {
    name: 'basscss',
    path: '/',
  },
  {
    name: 'docs',
    path: '/docs',
    routes: [].concat(
      modules,
      [
        {
          name: 'guides',
          path: '/guides',
          routes: [
            {
              name: 'basics',
              path: '/basics',
              description: 'Understanding the basics of designing for the web with CSS is essential to using Basscss effectively. This guide covers the fundamentals to help get you started.',
            },
            {
              name: 'page-layout',
              path: '/layout',
              description: 'Creating page layouts in Basscss is incredibly fast and flexible. This guide will walk you through common layout patterns to create an entire page with a basic information hierarchy.',
            },
            {
              name: 'flex-layout',
              title: 'Flex Object Layout',
              path: '/flex-layout',
              description: 'Solving page-level and micro layout problems with the flex object and other utilities',
            },
            {
              name: 'ui',
              title: 'UI Elements',
              path: '/ui',
              description: 'Creating user interface elements while keeping CSS bloat to a minimum and allowing for flexibility in making iterative design decisions',
            },
            {
              name: 'tips',
              title: 'Tips & Tricks',
              path: '/tips',
              description: 'Basscss is a versatile starting point for any project. These tips and tricks will help you build on top of its foundation in an elegant and maintainable way.',
            },
            {
              name: 'custom-builds',
              title: 'Custom Builds',
              path: '/custom-builds',
              description: 'Using NPM, Cssnext, Bower, Sass, and other tools to customize Basscss for your needs.',
            },
            {
              name: 'css4',
              title: 'CSS4 Syntax',
              path: '/css4',
              description: 'Getting started with CSS4 features, including custom properties and custom media queries',
            },
          ]
        },
        {
          name: 'reference',
          path: '/reference',
          routes: [
            {
              name: 'principles',
              title: 'Design Principles',
              path: '/principles'
            },
            //{
            //  name: 'showcase',
            //  title: 'Built with Basscss',
            //  path: '/showcase',
            //},
            {
              name: 'Table of Styles',
              path: '/styles'
            },
            //{
            //  name: 'stats',
            //  path: '/stats'
            //},
            {
              name: 'color-combinations',
              title: 'Color Combos',
              path: '/color-combinations'
            },
            {
              name: 'resources',
              title: 'Tools & Resources',
              path: '/resources'
            },
          ]
        }
      ]
    )
  },
  // Need filename option // Hidden path option?
  //{
  //  name: '404',
  //  filename: '404.html',
  //  path: '/',
  //  hidden: true,
  //},
];

