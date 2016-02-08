
import React from 'react'

const NavItem = ({ ...props }) => (
  <a {...props}
    className='h6 caps bold inline-block py1 color-inherit text-decoration-none hover-underline' />
)

export default NavItem
