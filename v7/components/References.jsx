
import React from 'react'
import Page from './Page.jsx'
import LinkList from './LinkList.jsx'

class References extends React.Component {

  render () {
    return (
      <Page {...this.props.route}>
        <LinkList items={this.props.references} />
      </Page>
    )
  }

}

export default References

