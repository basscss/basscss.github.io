
import React from 'react'
import Header from './Header.jsx'
import Link from './Link.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'

class ModuleHeader extends React.Component {

  render () {
    return (
      <div className='mb4'>
        <Header>
          <div className='mt2 flex flex-wrap flex-center'>
            <div className='flex-auto'>
              <a href='/'
                className='h5 bold compact color-inherit'>
                Basscss
              </a>
              <h1 className='m0'>{this.props.title}</h1>
              <h2 className='h5 m0'>{this.props.name} v{this.props.version}</h2>
            </div>
            <div className='mxn1'>
              <Link path={this.props.npm} title='npm' />
              <Link path={this.props.github} title='GitHub' />
            </div>
          </div>
        </Header>
        <Breadcrumbs path={this.props.path} />
      </div>
    )
  }

}

ModuleHeader.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string,
  version: React.PropTypes.string,
  npm: React.PropTypes.string,
  github: React.PropTypes.string,
  path: React.PropTypes.string,
}

export default ModuleHeader

