
import React from 'react'
import Header from './Header.jsx'

class PageHeader extends React.Component {

  render () {
    return (
      <Header>
        <h1>{this.props.title}</h1>
      </Header>
    )
  }

}

PageHeader.propTypes = {
  title: React.PropTypes.string,
}

export default PageHeader

