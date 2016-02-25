
import React from 'react'
import Logo from 'basscss-logo'
import filesize from 'filesize'
import TweetButton from './TweetButton'
import GithubBadge from './GithubBadge'
import NpmBadge from './NpmBadge'
import TravisBadge from './TravisBadge'
import CarbonAd from './CarbonAd'
import NavItem from './NavItem'
import Space from './Space'
import Stats from './Stats'

const Header = ({ name, version, modules, stats, ...props}) => (
  <header className='py4'>
    <div className='flex flex-wrap items-center mt4'>
      <div className=''>
        <Logo />
        <h1 className='m0'>
          Basscss
          {' '}
          <span className='h5'>v{version}</span>
        </h1>
        <p className='h3 mt1 mb1'>
          Low-Level CSS Toolkit
          {' '}
          <span className='h6 bold caps'>
            {filesize(stats.gzipSize)}
          </span>
        </p>
        <div className='flex flex-wrap items-center mb2'>
          <TravisBadge />
          <Space />
          <TweetButton
            text='Basscss: Low-Level CSS Toolkit'
            url='http://basscss.com' />
          <Space />
          <GithubBadge />
        </div>
      </div>
      <div className='flex-auto' />
      <CarbonAd />
    </div>
  </header>
)

export default Header

