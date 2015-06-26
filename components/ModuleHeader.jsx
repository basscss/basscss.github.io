
import React from 'react'
import Header from './Header.jsx'
import NavItem from './NavItem.jsx'

class ModuleHeader extends React.Component {

  render () {
    return (
      <Header>
        <h1 className='m0'>{this.props.title}</h1>
        <h2 className='h4 m0'>{this.props.name} v{this.props.version}</h2>
        <NavItem path={this.props.npm}
          name='npm' />
        <NavItem path={this.props.github}
          name='GitHub' />
      </Header>
    )
  }

}

ModuleHeader.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string,
  version: React.PropTypes.string,
  npm: React.PropTypes.string,
  github: React.PropTypes.string,
}

export default ModuleHeader

