
import React from 'react'
import { RouteHandler } from 'react-router'
import Head from './Head.jsx'

class Root extends React.Component {

  render () {
    return (
      <html>
        <Head {...this.props} />
        <body>
          <RouteHandler {...this.props} />
        </body>
      </html>
    )
  }

}

export default Root

