
import React from 'react'
import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'

class PageHeader extends React.Component {

  render () {
    return (
      <div className='mb3'>
        <Header>
          <h1>{this.props.title}</h1>
        </Header>
        <Breadcrumbs path={this.props.path} />
      </div>
    )
  }

}

PageHeader.propTypes = {
  title: React.PropTypes.string,
}

export default PageHeader

