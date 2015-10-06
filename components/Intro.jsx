
import React from 'react'
import carboncss from '../css/carbonads.css'
import { TweetButton, GithubButton, CarbonAd } from 'blk'
import Section from './Section.jsx'
import LinkBtn from './LinkBtn.jsx'
import Stats from './Stats.jsx'

class Intro extends React.Component {

  render () {
    return (
      <Section>
        <div className='sm-flex flex-center mxn2'>
          <div className='m2'>
            <p className='h2 bold'>
              Lightning-Fast Modular CSS with No Side Effects
            </p>
            <p className='h3'>
              Basscss is a lightweight collection of base element styles and immutable utilities designed for speed, clarity, performance, and scalability.
            </p>
          </div>
          <div className='flex-none py2'>
            <div className='inline-block px2'>
              <LinkBtn
                path='/docs'
                title='Download'
                big />
            </div>
            <div className='inline-block px2'>
              <LinkBtn
                path={this.props.homepage}
                title='GitHub'
                outline
                big />
            </div>
          </div>
        </div>
        <Stats {...this.props.stats} modules={this.props.modules} />
        <div className='sm-flex flex-center flex-wrap py1 mxn2'>
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
          <div className='flex-none m2'>
            <style dangerouslySetInnerHTML={{ __html: carboncss }} />
            <CarbonAd placement='basscsscom' />
          </div>
        </div>
      </Section>
    )
  }

}

export default Intro

