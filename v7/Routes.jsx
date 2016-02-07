
import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import Root from './components/Root.jsx'
import Home from './components/Home.jsx'
import Docs from './components/Docs.jsx'
import Module from './components/Module.jsx'
import Guides from './components/Guides.jsx'
import Guide from './components/Guide.jsx'
import References from './components/References.jsx'
import Reference from './components/Reference.jsx'
import GettingStarted from './components/GettingStarted.jsx'
import OptionalModules from './components/OptionalModules.jsx'
import ColorCombinations from './components/ColorCombinations.jsx'
import Styles from './components/Styles.jsx'
import FourOhFour from './components/404.jsx'

const Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Home} />
    <Route handler={Docs} path='/docs'>
      <DefaultRoute handler={GettingStarted} />
      <Route handler={OptionalModules} path='optional-modules' />
      <Route path='guides'>
        <DefaultRoute handler={Guides} />
        <Route handler={Guide} path=':guide' />

      </Route>
      <Route path='reference'>
        <DefaultRoute handler={References} />
        <Route handler={ColorCombinations} path='color-combinations' />
        <Route handler={Styles} path='styles' />
        <Route handler={Reference} path=':reference' />
      </Route>
      <Route handler={Module} path=':module' />
    </Route>
    <Route handler={FourOhFour} path='404' />
  </Route>
)

export default Routes

