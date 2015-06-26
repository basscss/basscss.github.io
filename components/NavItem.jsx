
import React from 'react'
import cx from 'classnames'

class NavItem extends React.Component {

  render () {
    return (
      <a href={this.props.path}
        className={cx('btn compact', {
          block: this.props.block
        })}>
        {this.props.title}
      </a>
    )
  }

}

NavItem.propTypes = {
  block: React.PropTypes.bool
}

export default NavItem

