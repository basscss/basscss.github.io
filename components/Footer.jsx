
import React from 'react'
import Link from './Link.jsx'

class Footer extends React.Component {

  render () {
    return (
      <footer className='h6 compact py3 border-top'>
        <div className='flex flex-wrap flex-baseline mxn1'>
          <Link path='/' title='Basscss' />
          <div className=''>v{this.props.version}</div>
          <Link path='//github.com/basscss/basscss' title='GitHub' />
          <div className='flex-auto' />
          <Link path='//jxnblk.com' title='Made by Jxnblk' />
        </div>
      </footer>
    )
  }

}

export default Footer

