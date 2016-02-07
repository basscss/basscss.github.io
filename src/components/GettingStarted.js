
import React from 'react'
import SectionTitle from './SectionTitle'
import NavItem from './NavItem'
import Space from './Space'
import Prose from './Prose'
import html from 'basscss/docs/GettingStarted.md'

const GettingStarted = ({ cdn, version, ...props }) => (
  <section id='getting-started'
    className='py4'>
    <SectionTitle name='getting-started'
      children='Getting Started' />
    <pre>npm install basscss@{version}</pre>
    <p>
      Or use the
      {' '}
      <a href={cdn} className='' target='_blank'>CDN Link</a>
    </p>
    <pre children={`<link href="${cdn}" rel="stylesheet">`} />
    {/*
    <Prose html={html} />
    */}
  </section>
)

export default GettingStarted


// Use Basscss on top of base element stylesheets like
// <a href='//necolas.github.io/normalize.css/'>Normalize.css</a>
// and
// <a href='//jxnblk.com/initcss'>initcss</a>.
// Customize the look and feel with your own color styles.
