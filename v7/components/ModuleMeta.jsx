
import React from 'react'
import Link from './Link.jsx'

class ModuleMeta extends React.Component {

  render () {
    return (
      <div className='flex flex-wrap mt3 mb3'>
        <Link
          path={this.props.npm}
          title={this.props.name + ' v' + this.props.version} />
        <div className='mxn1'>
          <Link path={this.props.npm} title='npm' />
          <Link path={this.props.github} title='GitHub' />
        </div>
      </div>
    )
  }

}

ModuleMeta.propTypes = {
  name: React.PropTypes.string,
  version: React.PropTypes.string,
  npm: React.PropTypes.string,
  github: React.PropTypes.string,
}

export default ModuleMeta

