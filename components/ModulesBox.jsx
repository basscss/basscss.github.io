
import React from 'react'
import Section from './Section.jsx'
import Row from './Row.jsx'
import Col from './Col.jsx'
import Link from './Link.jsx'

class ModulesBox extends React.Component {

  render () {
    return (
      <Section>
        <h2 className='mt0'>Modular, Literally</h2>
        <p className=''>
          Basscss is composed of <b>{this.props.modules.length}</b> modules - each available in standalone format on npm.
        </p>
        <Row>
          {this.props.modules.map(function(mod, i) {
            return (
              <Col sm={6} md={3} key={i} compact>
                <Link {...mod}
                  path={'/docs/' + mod.slug}
                  flush
                  block
                  big />
              </Col>
            )
          })}
        </Row>
      </Section>
    )
  }

}

export default ModulesBox

