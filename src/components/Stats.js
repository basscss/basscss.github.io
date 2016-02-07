
import React from 'react'
import filesize from 'filesize'

const Stats = ({ size, gzipSize, rules, selectors, declarations, ...props }) => (
  <div className='h6 caps flex flex-wrap mxn2'>
    <div className='px2'>{filesize(gzipSize)}</div>
    <div className='px2'>{rules.total} Rules</div>
    <div className='px2'>{selectors.total} Selectors</div>
    <div className='px2'>{declarations.total} Declarations</div>
  </div>
)

export default Stats

