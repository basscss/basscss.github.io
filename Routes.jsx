
import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import Root from './components/Root.jsx'
import Index from './components/Index.jsx'
import Docs from './components/Docs.jsx'
import Module from './components/Module.jsx'
import Guides from './components/Guides.jsx'
import Guide from './components/Guide.jsx'
import References from './components/References.jsx'
import Reference from './components/Reference.jsx'

export default Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route handler={Docs} path='/docs'>
      <Route handler={Guides} path='guides'>
        <Route handler={Guide} path=':guide' />
      </Route>
      <Route handler={References} path='reference'>
        <Route handler={Reference} path=':reference' />
      </Route>
      <Route handler={Module} path=':module' />
    </Route>
  </Route>
)

