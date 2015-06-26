
import React from 'react'
import cx from 'classnames'

class NavItem extends React.Component {

  render () {
    return (
      <a href={this.props.path}
        className={cx('btn compact btn-nav', {
          block: this.props.block,
          'white bg-blue': this.props.active
        })}>
        {this.props.title}
      </a>
    )
  }

}

NavItem.propTypes = {
  block: React.PropTypes.bool,
  active: React.PropTypes.bool
}

export default NavItem

