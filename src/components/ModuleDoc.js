
import React from 'react'
import SectionTitle from './SectionTitle'
import NavItem from './NavItem'
import Prose from './Prose'

const ModuleDoc = ({ name, title, html, ...props }) => (
  <section id={name}
    className='py4'>
    <SectionTitle name={name} children={title} />
    <Prose html={html} />
    <div className='right-align'>
      <NavItem href='#' children='Top' />
    </div>
  </section>
)

export default ModuleDoc

