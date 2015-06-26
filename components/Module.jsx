
import React from 'react'
import { find } from 'lodash'
import markdown from '../util/markdown'
import ModuleHeader from './ModuleHeader.jsx'
import ModuleStats from './ModuleStats.jsx'
import Prose from './Prose.jsx'
import Pagination from './Pagination.jsx'
import Pre from './Pre.jsx'

class Module extends React.Component {

  render () {
    let routes = this.props.routes
    let modules = this.props.modules
    let params = this.props.params || {}
    let route = find(routes, function(route) {
      return route.name === params.module
    })
    let mod = find(modules, function(mod) {
      return mod.slug === params.module
    })
    let html = {
      __html: markdown(mod.readme)
    }
    
    return (
      <main>
        <ModuleHeader
          {...mod}
          npm={mod.npm_link}
          github={mod.homepage} 
          path={route.path} />
        <Prose>
          <div dangerouslySetInnerHTML={html} />
        </Prose>
        <hr />
        <h3>CSS Source</h3>
        <Pre>{mod.css}</Pre>
        <ModuleStats {...mod} />
        <Pagination
          previous={route.previous}
          next={route.next} />
      </main>
    )
  }

}

export default Module

