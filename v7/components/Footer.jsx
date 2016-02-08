
import React from 'react'
import Link from './Link.jsx'
import Container from './Container.jsx'

class Footer extends React.Component {

  render () {
    return (
      <footer className='Footer h6 compact mt4'>
        <Container wide={this.props.wide}>
          <div className='py3 border-top'>
            <div className='flex flex-wrap flex-baseline mxn1'>
              <Link path='/v7' title='Basscss' />
              <div className=''>v{this.props.version}</div>
              <Link path='/v7/docs' title='Docs' />
              <Link path='//github.com/basscss/basscss' title='GitHub' />
              <div className='flex-auto' />
              <Link path='//jxnblk.com' title='Made by Jxnblk' />
            </div>
          </div>
        </Container>
      </footer>
    )
  }

}

export default Footer

