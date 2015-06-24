
import React from 'react'
import { find } from 'lodash'

class Module extends React.Component {

  render () {
    let modules = this.props.modules
    let params = this.props.params || {}
    let mod = {}
    mod = find(modules, function(m) {
      return m.name === params.module
    })
    if (mod) {
      console.log(mod.name)
    }
    return (
      <main>
        Module
        {params.module}
        <h1>{mod.name}</h1>
        <div>{mod.readme}</div>
      </main>
    )
  }

}

export default Module

