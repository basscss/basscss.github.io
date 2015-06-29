
import React from 'react'
import cx from 'classnames'
import NavItem from './NavItem.jsx'

class Nav extends React.Component {

  render () {
    let path = this.props.router.path

    return (
      <nav id='menu'>
        <ul className='list-reset clearfix'>
          {this.props.items.map(function(item, i) {
            let active = item.path === path
            return (
              <li key={i}
                className={cx('col col-6 sm-col-12', {
                  'mt2': item.index,
                  active: active
                })}>
                <NavItem {...item} block active={active} />
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

}

Nav.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    path: React.PropTypes.string,
    name: React.PropTypes.string
  }))
}

export default Nav

