
import React from 'react'
import carboncss from '../css/carbonads.css'
import { CarbonAd } from 'blk'
import PageHeader from './PageHeader.jsx'
import Pagination from './Pagination.jsx'


class Page extends React.Component {

  render () {
    return (
      <main>
        <PageHeader {...this.props} />
        <CarbonAd />
        <style dangerouslySetInnerHTML={{ __html: carboncss }} />
        {this.props.children}
        <Pagination {...this.props} />
      </main>
    )
  }

}

export default Page

