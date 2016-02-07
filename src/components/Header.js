
import React from 'react'
import Logo from 'basscss-logo'
import TweetButton from './TweetButton'
import GithubBadge from './GithubBadge'
import NpmBadge from './NpmBadge'
import TravisBadge from './TravisBadge'
import CarbonAd from './CarbonAd'
import NavItem from './NavItem'
import Space from './Space'
import Stats from './Stats'
import Nav from './Nav'

const Header = ({ name, version, modules, stats, ...props}) => (
  <header className='py4'>
    <div className='flex flex-wrap items-center py4'>
      <div className='mb4'>
        <Logo />
        <h1 className='m0'>
          Basscss
          {' '}
          <span className='h5'>v{version}</span>
        </h1>
        <p className='h3 mt1 mb0'>Low-Level CSS Toolkit</p>
        <NavItem href='#getting-started' children='Docs' />
        <Space />
        <NavItem href='//github.com/basscss/basscss' children='GitHub' />
        <Space />
        <NavItem href='//npmjs.com/package/basscss' children='npm' />
      </div>
      <div className='flex-auto' />
      <CarbonAd />
    </div>
    {/*
    <Nav id='nav' modules={modules} />
    */}
    <div className='lg-flex justify-between items-center'>
      <div className='order-last'>
        <Stats {...stats} />
      </div>
      <div className='flex flex-wrap items-center py2'>
        <TweetButton
          text='Basscss: Low-Level CSS Toolkit'
          url='http://basscss.com' />
        <Space />
        <GithubBadge />
        <Space />
        <TravisBadge />
        <Space />
        <NpmBadge />
      </div>
    </div>
  </header>
)

export default Header

