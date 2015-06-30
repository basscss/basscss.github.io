
import React from 'react'
import Section from './Section.jsx'
import LinkBtn from './LinkBtn.jsx'

class CTA extends React.Component {

  render () {
    return (
      <Section>
        <div className='sm-flex flex-center mxn2'>
          <div className='flex-auto px2'>
            <h2 className='m0'>Get Started</h2>
            <p className='h3 m0'>View the docs to download Basscss and learn more.</p>
          </div>
          <div className='flex-none px2 py1'>
            <LinkBtn
              path='/docs'
              title='Get Started'
              big />
          </div>
          <div className='flex-none px2 py1'>
            <LinkBtn
              path={this.props.homepage}
              title='GitHub'
              outline
              big />
          </div>
        </div>
      </Section>
    )
  }

}

export default CTA

