
import React from 'react'
import NavItem from './NavItem.jsx'

class Footer extends React.Component {

  render () {
    return (
      <footer className='h5 py3 border-top'>
        <div className='flex flex-baseline mxn2'>
          <NavItem path='/' title='Basscss' />
          <div>v{this.props.version}</div>
          <div className='flex-auto' />
          <NavItem path='//jxnblk.com' title='Made by Jxnblk' />
        </div>
      </footer>
    )
  }

}

export default Footer

