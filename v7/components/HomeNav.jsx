
import React from 'react'
import Link from './Link.jsx'

class HomeNav extends React.Component {

  render () {
    return (
      <div className='mxn1'>
        <Link path='/v7/docs' text='Docs' />
        <Link path='/v7/docs/guides' text='Guides' />
        <Link path='/v7/docs/reference' text='Reference' />
        <Link path='//github.com/basscss/basscss'
          text='GitHub' />
        <Link path='//npmjs.com/package/basscss'
          text='npm' />
      </div>
    )
  }

}

export default HomeNav

