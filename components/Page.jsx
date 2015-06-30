
import React from 'react'
import { CarbonAd } from 'blk'
import PageHeader from './PageHeader.jsx'
import Pagination from './Pagination.jsx'


class Page extends React.Component {

  render () {
    return (
      <main>
        <PageHeader {...this.props} />
        <CarbonAd />
        {this.props.children}
        <Pagination {...this.props} />
      </main>
    )
  }

}

export default Page

