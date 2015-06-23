
import React from 'react'
import { RouteHandler } from 'react-router'

class Docs extends React.Component {

  render () {
    return (
      <main>
        Docs
        <RouteHandler {...this.props} />
      </main>
    )
  }

}

export default Docs

