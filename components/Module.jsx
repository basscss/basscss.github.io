
import React from 'react'
import { CarbonAd } from 'blk'
import markdown from '../util/markdown'
import PageHeader from './PageHeader.jsx'
import Link from './Link.jsx'
import ModuleStats from './ModuleStats.jsx'
import Prose from './Prose.jsx'
import Pagination from './Pagination.jsx'
import Pre from './Pre.jsx'

class Module extends React.Component {

  render () {
    let route = this.props.route
    let mod = this.props.module
    let meta = (
      <div className='mxn1'>
        <Link path={mod.npm_link}
          title='View on npm'
          external
          text={mod.name + ' v' + mod.version} /> 
      </div>
    )
    let html = markdown(mod.readme)
    
    return (
      <main>
        <PageHeader
          {...mod}
          path={route.path}
          meta={meta} />
        <CarbonAd />
        <Prose html={html} />
        <hr />
        <h3>CSS Source</h3>
        <Pre>{mod.cleanCss}</Pre>
        <ModuleStats {...mod} />
        <Pagination
          previous={route.previous}
          next={route.next} />
      </main>
    )
  }

}

export default Module

