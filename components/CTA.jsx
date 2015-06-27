
import React from 'react'
import Section from './Section.jsx'
import LinkBtn from './LinkBtn.jsx'

class CTA extends React.Component {

  render () {
    return (
      <Section>
        <h2>Get Started</h2>
        <p>View the docs to download Basscss and learn more.</p>
        <LinkBtn
          path='/docs'
          title='Download'
          big />

      </Section>
    )
  }

}

export default CTA

