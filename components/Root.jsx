
import React from 'react'
import { RouteHandler } from 'react-router'
import Head from './Head.jsx'
import ga from '../data/ga'

class Root extends React.Component {

  render () {
    return (
      <html>
        <Head {...this.props} />
        <body>
          <RouteHandler {...this.props} />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </body>
      </html>
    )
  }

}

export default Root

