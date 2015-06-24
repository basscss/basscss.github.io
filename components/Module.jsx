
import React from 'react'
import { find } from 'lodash'
import markdown from '../util/markdown'

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
        <h1>{mod.name}</h1>
        <div dangerouslySetInnerHTML={html} />
      </main>
    )
  }

}

export default Module

