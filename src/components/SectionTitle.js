
import React from 'react'

const SectionTitle = ({ name, children, ...props }) => (
  <h2 className='h1'>
    <a href={`#${name}`}
      className='color-inherit text-decoration-none hover-underline'>
      {children}
    </a>
  </h2>
)

export default SectionTitle

