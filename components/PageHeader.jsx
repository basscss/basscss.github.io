
import React from 'react'
import Header from './Header.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'

class PageHeader extends React.Component {

  render () {
    return (
      <div className='mb3'>
        <Header>
          <div className='mt2'>
            <a href='/'
              className='h4 bold caps compact color-inherit'>
              Basscss
            </a>
            <h1 className='mt0'>{this.props.title}</h1>
          </div>
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

