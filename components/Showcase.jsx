
import React from 'react'
import Section from './Section.jsx'
import Row from './Row.jsx'
import Col from './Col.jsx'
import Link from './Link.jsx'

class Showcase extends React.Component {

  render () {
    let assetPath = this.props.asset_path
    return (
      <Section>
        <h2 className='inline-block mr1'>
          Built with Basscss
        </h2>
        <Link path='/showcase'
          title='View More'
          baseline
          flush />
        <Row>
          {this.props.sites.map(function(site, i) {
            if (i > 3) { return false }
            return (
              <Col sm={6} md={3} key={i}>
                <a href={site.url}
                  className='block color-inherit'>
                  <img src={assetPath + site.image}
                    className='border' />
                  <h4 className='m0'>{site.title}</h4>
                </a>
              </Col>
            )
          })}
        </Row>
        <div>
        </div>
      </Section>
    )
  }

}

export default Showcase

