
import React from 'react'

class Header extends React.Component {

  render () {
    return (
      <header className='py2 mt3 border-bottom'>
        {this.props.children}
      </header>
    )
  }

}

export default Header

