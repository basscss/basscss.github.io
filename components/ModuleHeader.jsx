
import React from 'react'
import Header from './Header.jsx'

class ModuleHeader extends React.Component {

  render () {
    return (
      <Header>
        <h1>{this.props.title}</h1>
        <h2>{this.props.name} v{this.props.version}</h2>
        <a href={this.props.npm}>
          npm
        </a>
        <a href={this.props.github}>
          GitHub
        </a>
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

