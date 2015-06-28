
import React from 'react'
import { CarbonAd } from 'blk'
import PageHeader from './PageHeader.jsx'


class Page extends React.Component {

  render () {
    return (
      <main>
        <PageHeader {...this.props} />
        <CarbonAd />
        {this.props.children}
      </main>
    )
  }

}

export default Page

