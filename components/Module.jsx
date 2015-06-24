
import React from 'react'
import { find } from 'lodash'
import markdown from '../util/markdown'
import ModuleHeader from './ModuleHeader.jsx'

class Module extends React.Component {

  render () {
    let modules = this.props.modules
    let params = this.props.params || {}
    let mod = find(modules, function(m) {
      return m.name === params.module
    })
    let html = {
      __html: markdown(mod.readme)
    }
    
    return (
      <main>
        <ModuleHeader
          title={mod.title}
          name={mod.name}
          version={mod.version}
          npm={mod.npm_link}
          github={mod.homepage} />
        <div dangerouslySetInnerHTML={html} />
      </main>
    )
  }

}

export default Module

