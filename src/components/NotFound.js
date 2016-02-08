
import React from 'react'
import Logo from 'basscss-logo'

class NotFound extends React.Component {

  render () {
    return (
      <div className='flex flex-column items-center justify-center'
        style={{ minHeight: '100vh' }}>
        <a href='/' className='color-inherit'>
          <Logo />
        </a>
        <h1 className='m0'>404: Page Not Found</h1>
        <a href='/'>Home</a>
      </div>
    )
  }

}

export default NotFound

