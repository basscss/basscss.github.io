
import React from 'react'
import Header from './Header.jsx'
import Link from './Link.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'

class PageHeader extends React.Component {

  render () {
    return (
      <div className='mb3'>
        <Header>
          <div className='sm-flex flex-center flex-wrap'>
            <div className='flex-auto'>
              <div className='mxn1'>
                <Link path='/v7/' title='Basscss' compact />
              </div>
              <h1 className='m0'>{this.props.title}</h1>
            </div>
            {this.props.meta}
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

