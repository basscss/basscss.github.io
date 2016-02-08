
import React from 'react'

const BetaBanner = () => (
  <div className='center px3 py2'
    style={{
      color: '#0ac',
      backgroundColor: '#024'
    }}>
    <p className='h5 bold m0'>
      This is a beta release preview.
      See the <a href='https://github.com/basscss/basscss/pull/157' target='_blank' className='color-inherit'>v8 Pull Request</a>.
      For the previous version see the <a href='/v7' className='color-inherit'>v7 docs</a>.
    </p>
  </div>
)

export default BetaBanner
