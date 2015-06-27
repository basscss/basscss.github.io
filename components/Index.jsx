
import React from 'react'
import { TweetButton, GithubButton, CarbonAd } from 'blk'
import Container from './Container.jsx'
import Header from './Header.jsx'
import Section from './Section.jsx'
import Link from './Link.jsx'
import LinkBtn from './LinkBtn.jsx'
import Stats from './Stats.jsx'
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
            <h1 className='m0'>Basscss</h1>
            <p className='h3 bold'>
              {this.props.description} v{this.props.version}
            </p>
          </Header>
          <Section>
            <p className='h2 bold'>
              Lightning-Fast Modular CSS with No Side Effects
            </p>
            <p className='h3'>
              Basscss is a lightweight collection of base element styles, immutable utilities, layout modules, and color styles designed for speed, clarity, performance, and scalability.
            </p>
            <div className='flex flex-center flex-wrap py3 mxn2'>
              <div className='m2'>
                <TweetButton
                  text='Low-level CSS toolkit' />
              </div>
              <div className='m2'>
                <GithubButton
                  user='basscss'
                  repo='basscss' />
              </div>
              <div className='flex-auto' />
              <div className='px2 mb1'>
                <LinkBtn
                  path='/docs'
                  title='Download'
                  big />
              </div>
            </div>
            <Stats {...this.props.stats} modules={this.props.modules} />
          </Section>
          <ValueProps />
          <Categories />
          <Showcase />
          <CTA />
        </Container>
        <Footer {...this.props} />
      </div>
    )
  }

}

export default Index

