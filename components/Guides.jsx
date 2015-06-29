
import React from 'react'
import Page from './Page.jsx'
import LinkList from './LinkList.jsx'

class Guides extends React.Component {

  render () {
    let guides = this.props.guides.map(function(guide) {
      guide.path = '/docs/guides/' + guide.name
      return guide
    })
    return (
      <Page {...this.props.route}>
        <LinkList items={guides} />
      </Page>
    )
  }

}

export default Guides

