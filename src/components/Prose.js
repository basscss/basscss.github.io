
import React from 'react'

const Prose = ({ html, ...props }) => (
  <div className='Prose'
    dangerouslySetInnerHTML={{ __html: html }} />
)

export default Prose

