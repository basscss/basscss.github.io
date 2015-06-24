
import React from 'react'

class Nav extends React.Component {

  render () {

    return (
      <nav>
        <ul>
          {this.props.items.map(function(item, i) {
            return (
              <li key={i}>
                <a href={item.path}>
                  {item.name}
                </a>
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

