
import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import Root from './components/Root.jsx'
import Index from './components/Index.jsx'

export default Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
  </Route>
)

