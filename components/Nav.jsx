
import React from 'react'
import NavItem from './NavItem.jsx'

class Nav extends React.Component {

  render () {

    return (
      <nav>
        <ul className='list-reset'>
          {this.props.items.map(function(item, i) {
            return (
              <li key={i}>
                <NavItem {...item} block />
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

