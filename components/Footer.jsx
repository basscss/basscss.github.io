
import React from 'react'
import Link from './Link.jsx'

class Footer extends React.Component {

  render () {
    return (
      <footer className='Footer container h6 compact mt4 px2 sm-px3'>
        <div className='py3 border-top'>
          <div className='flex flex-wrap flex-baseline mxn1'>
            <Link path='/' title='Basscss' />
            <div className=''>v{this.props.version}</div>
            <Link path='//github.com/basscss/basscss' title='GitHub' />
            <div className='flex-auto' />
            <Link path='//jxnblk.com' title='Made by Jxnblk' />
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer

