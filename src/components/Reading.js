
import React from 'react'

const links = [
  {
    href: 'http://www.jon.gold/2015/07/functional-css/',
    children: 'Functional Programming, CSS, and your sanity'
  },
  {
    href: 'https://blog.colepeters.com/building-and-shipping-functional-css/',
    children: 'Building and shipping functional CSS'
  },
  {
    href: 'http://mrmrs.io/writing/2014/08/11/good-css/',
    children: 'Good CSS'
  },
]

const Reading = () => (
  <section id='reading' className=''>
    <h2 className='h4'>Further Reading</h2>
    <ul className='list-reset sm-flex justify-between mxn2'>
      {links.map((link, i) => (
        <li key={i} className='px2'>
          <a {...link} />
        </li>
      ))}
    </ul>
  </section>
)

export default Reading
