
import React from 'react'
import Section from './Section.jsx'
import Row from './Row.jsx'
import Col from './Col.jsx'
import Link from './Link.jsx'

class Principles extends React.Component {

  render () {
    return (
      <Section>
        <h2>Design Principles</h2>
        <Row>
          <Col sm={6}>
            <h3>Follow the Open/Closed Principle</h3>
          </Col>
          <Col sm={6}>
            <h3>Design with Reuse in Mind</h3>
          </Col>
          <Col sm={6}>
            <h3>Don’t Make Assumtions</h3>
          </Col>
          <Col sm={6}>
            <h3>Clarity Over Cleverness</h3>
          </Col>
          <Col sm={6}>
            <h3>Balance Consistency with Flexibility</h3>
          </Col>
        </Row>
        <Link path='/v7/docs/reference/principles'
          title='Read more'
          big
          flush />
      </Section>
    )
  }

}

export default Principles

