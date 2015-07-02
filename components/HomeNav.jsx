
import React from 'react'
import Link from './Link.jsx'

class HomeNav extends React.Component {

  render () {
    return (
      <div className='mxn1'>
        <Link path='/docs' text='Docs' />
        <Link path='/docs/guides' text='Guides' />
        <Link path='/docs/reference' text='Reference' />
        <Link path='//github.com/basscss/basscss'
          text='GitHub' />
        <Link path='//npmjs.com/package/basscss'
          text='npm' />
      </div>
    )
  }

}

export default HomeNav

