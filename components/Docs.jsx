
import React from 'react'
import { RouteHandler } from 'react-router'

class Docs extends React.Component {

  render () {
    return (
      <main>
        Docs
        <ul>
          {this.props.routes.map(function(route, i) {
            return <li key={i}><a href={route}>{route}</a></li>
          })}
        </ul>
        <RouteHandler {...this.props} />
      </main>
    )
  }

}

export default Docs

