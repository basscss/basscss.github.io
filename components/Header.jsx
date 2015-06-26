
import React from 'react'

class Header extends React.Component {

  render () {
    return (
      <header className='py4 mb4 border-bottom'>
        {this.props.children}
      </header>
    )
  }

}

export default Header

