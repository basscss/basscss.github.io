
import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Features from './Features'
// import Reading from './Reading'
import Testimonials from './Testimonials'
import GettingStarted from './GettingStarted'
import Docs from './Docs'
import Footer from './Footer'
import OptionalsPromo from './OptionalsPromo'
import BetaBanner from './BetaBanner'

class Home extends React.Component {

  render () {
    const { nav, subnav, stats } = this.props

    return (
      <div className=''>
        <BetaBanner />
        <div className='px3 lg-px4'>
          <Header {...this.props} />
          <Nav id='nav' items={nav} />
          <Features {...this.props} />
          <Testimonials {...this.props} />
          <div className='container mb4'>
            <GettingStarted {...this.props} />
            <Docs {...this.props} />
            <OptionalsPromo />
          </div>
          <Nav items={nav} />
          <Footer {...this.props} />
        </div>
      </div>
    )
  }

}

export default Home
