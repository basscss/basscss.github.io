
import React from 'react'
import Logo from 'basscss-logo'
import Container from './Container.jsx'
import Header from './Header.jsx'
import Intro from './Intro.jsx'
import ValueProps from './ValueProps.jsx'
import Categories from './Categories.jsx'
import ModulesBox from './ModulesBox.jsx'
import Principles from './Principles.jsx'
// import Showcase from './Showcase.jsx'
import CTA from './CTA.jsx'
import Footer from './Footer.jsx'

import HomeNav from './HomeNav.jsx'

class Index extends React.Component {

  render () {
    return (
      <div>
        <Container wide>
          <Header>
            <div className='md-flex flex-center'>
              <div className='flex-auto'>
                <div className='blue'>
                  <Logo />
                </div>
                <h1 className='m0'>Basscss</h1>
                <p className='h3 bold'>
                  {this.props.description} <span className='h5'>v{this.props.version}</span>
                </p>
              </div>
              <div>
                <HomeNav />
              </div>
            </div>
          </Header>
          <Intro {...this.props} />
          <ValueProps />
          <hr />
          <Categories />
          <hr className='mt0' />
          <ModulesBox {...this.props} />
          {/*
            <hr />
            <Showcase {...this.props.showcase} />
          */}
          <hr className='mb4' />
          <CTA {...this.props} />
        </Container>
        <Footer {...this.props} wide />
      </div>
    )
  }

}

export default Index

