
import React from 'react'
import { find } from 'lodash'
import { CarbonAd } from 'blk'
import markdown from '../util/markdown'
import PageHeader from './PageHeader.jsx'
import Link from './Link.jsx'
import ModuleHeader from './ModuleHeader.jsx'
import ModuleMeta from './ModuleMeta.jsx'
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
    let meta = (
      <div className='mxn1'>
        <Link path={mod.npm_link}
          title='View on npm'
          external
          text={mod.name + ' v' + mod.version} /> 
      </div>
    )
    let html = {
      __html: markdown(mod.readme)
    }
    
    return (
      <main>
        <PageHeader
          {...mod}
          path={route.path}
          meta={meta} />
        <CarbonAd />
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

