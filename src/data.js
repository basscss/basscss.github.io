
import { startCase } from 'lodash'
import pkg from 'basscss/package.json'
import css from 'basscss/css/basscss.min.css'
import cssstats from 'cssstats'

const stats = cssstats(css.toString())

const cdn = `https://npmcdn.com/basscss@${pkg.version}/css/basscss.min.css`

const modules = [
  'type-scale',
  'typography',
  'layout',
  'align',
  'margin',
  'padding',
  'position',
  'grid',
  'flexbox',
  'border',
  'hide',
].map(name => {
  const data = require(`../node_modules/basscss-${name}/package.json`)
  data.html = require(`../node_modules/basscss-${name}/README.md`)
  data.title = startCase(data.name.replace(/^basscss\-/, ''))
  return data
})

const docsNav = modules.map((mod, i) => ({ href: `#${mod.name}`, children: mod.title }))

const nav = [
  {
    href: '#getting-started',
    children: 'Getting Started'
  },
  ...docsNav
]

const subnav = [
  {
    href: '//basscss.com/showcase',
    children: 'Showcase'
  },
  {
    href: '//basscss.com/themes',
    children: 'Themes'
  },
  {
    href: '//basscss.com/customize',
    children: 'Customize'
  },
]

const features = [
  {
    title: 'Code with Confidence',
    description: 'Using clear, humanized naming conventions, Basscss is quick to internalize and easy to reason about while speeding up development time with more scalable, more readable code.'
  },
  {
    title: 'No Side Effects',
    description: 'Things behave exactly as expected with immutable utilities and styles that do one thing well to help prevent common pitfalls with CSS.'
  },
  {
    title: 'Composable',
    description: 'Reusable, interoperable styles work like building blocks to lay the foundation for any stylesheet and can be mixed and matched in any number of combinations.'
  },
  {
    title: 'Designed for Design',
    description: 'Basscss strikes a balance between consistency and flexibility to allow for rapid prototyping and quick iterative changes when designing in the browser.'
  },
  {
    title: 'Responsive by Default',
    description: 'Basscss provides lightweight, performant styles and flexible utilities to design for any device and to help reduce boilerplate in stylesheets.'
  },
  {
    title: 'Unassuming',
    description: 'Modular and customizable typography and layout styles don’t dictate what things should look like and play well with other stylesheets and frameworks.'
  },
]

const quotes = [
  {
    text: 'Basscss is an atomic class based CSS library... A very good one! But I really hated it at the time. But I don’t hate it anymore!',
    source: 'Sam Thurman',
    href: 'https://medium.com/buzzfeed-design/how-i-learned-to-stop-worrying-and-love-the-atomic-class-98d6ccc45781#.yqnsfkbx2'
  },
  {
    text: 'I used Basscss for http://nodeconf.com  and it was such a pleasure to work with. I think I’ll use it for my personal site too!',
    source: 'Karolina Szczur',
    href: 'https://twitter.com/fox/status/572441586983936000'
  },
  {
    text: 'Writing CSS is easy. Writing long lived maintainable CSS in a real webapp is hard. Until Jon Gold introduced me to [Basscss]',
    source: 'Joe Walnes',
    href: 'https://twitter.com/joewalnes/status/668126388499574784'
  },
  {
    text: 'Basscss is so good it’s worth losing sleep over tonight.',
    source: 'Justin Maxwell',
    href: 'https://twitter.com/303/status/622293670583087104'
  },
  {
    text: 'Probably does everything you use Bootstrap for, but in 3.5kb',
    source: 'Michael Martin',
    href: 'https://twitter.com/problogdesign/status/621730043920785408'
  },
  {
    text: 'Been using Basscss to rapidly prototype ideas for BuzzFeed. So good.',
    source: 'Cap Watkins',
    href: 'https://twitter.com/cap/status/571511244835840000'
  },

  // {
  //   text: 'This makes me want to tear down everything I just finished and start over. Thanks a lot!',
  //   source: 'Wilson Miner',
  //   href: 'https://twitter.com/wilsonminer/status/616656263665991680'
  // },
  // {
  //   text: 'ohh very oocss \n mayb 2 much',
  //   source: 'Doge CSS',
  //   href: 'https://twitter.com/doge_css/status/436516107592007680'
  // },
  // {
  //   text: '...Basscss is easier, faster & arguably cleaner than Bootstrap will ever be.',
  //   source: 'Antoine Butler',
  //   href: 'https://twitter.com/aebsr/status/584141608024682496'
  // },
  // {
  //   text: 'Basscss is surprisingly feature-rich for something that weighs less than 4 KB.',
  //   source: 'Jacob Gube',
  //   href: 'http://sixrevisions.com/css/small-css-frameworks/'
  // }

  // https://twitter.com/mschoening/status/616093481807671296
  // https://twitter.com/skattyadz/status/617677499997233152
  // https://twitter.com/dandel/status/694428422915887105
  // https://twitter.com/clarklab/status/593451972860223488
  // https://twitter.com/broccolini/status/493155350661824512
  // https://twitter.com/broccolini/status/435800001034600448
]


export default {
  ...pkg,
  stats,
  cdn,
  modules,
  nav,
  subnav,
  features,
  quotes
}

