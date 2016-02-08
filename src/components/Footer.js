
import React from 'react'
import NavItem from './NavItem'
import Space from './Space'

const Footer = ({ version, ...props }) => (
  <footer className='flex flex-wrap items-baseline py4'>
    <NavItem href='#' children='Basscss' />
    <Space />
    <span className='h6'>v{version}</span>
    <Space />
    <NavItem href='//github.com/basscss/basscss' children='GitHub' />
    <Space />
    <NavItem href='//npmjs.com/package/basscss' children='npm' />
    <div className='flex-auto' />
    <NavItem href='//jxnblk.com' children='Made by Jxnblk' />
  </footer>
)

export default Footer

