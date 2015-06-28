
import React from 'react'
import { CarbonAd } from 'blk'
import Logo from 'basscss-logo'
import Container from './Container.jsx'
import Header from './Header.jsx'
import Intro from './Intro.jsx'
import ValueProps from './ValueProps.jsx'
import Categories from './Categories.jsx'
import Showcase from './Showcase.jsx'
import CTA from './CTA.jsx'
import Footer from './Footer.jsx'

class Index extends React.Component {

  render () {
    return (
      <div>
        <Container>
          <Header>
            <Logo />
            <h1 className='m0'>Basscss</h1>
            <p className='h3 bold'>
              {this.props.description} v{this.props.version}
            </p>
          </Header>
          <Intro {...this.props} />
          <ValueProps />
          <Categories />
          {/* <Showcase /> */}
          <CTA />
        </Container>
        <Footer {...this.props} />
      </div>
    )
  }

}

export default Index

