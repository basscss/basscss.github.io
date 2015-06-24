
import React from 'react'

class Header extends React.Component {

  render () {
    return (
      <header>
        {this.props.children}
      </header>
    )
  }

}

export default Header

