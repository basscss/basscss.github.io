
import React from 'react'
import Section from './Section.jsx'
import Row from './Row.jsx'
import Col from './Col.jsx'
import BaseIllustration from './BaseIllustration.jsx'
import UtilityIllustration from './UtilityIllustration.jsx'

class Categories extends React.Component {

  render () {
    return (
      <Section>
        <Row>
          <Col sm={6}>
            <BaseIllustration />
            <h2>Base Elements</h2>
            <p>Unopinionated and customizable core typographic, form, button, and base element styles keep designs consistent where it matters most.</p>
          </Col>
          <Col sm={6}>
            <UtilityIllustration />
            <h2>Immutable Utilities</h2>
            <p>Simple, composable typographic, layout, and color utilities based on common scales promote faster design and development in the browser and more performant, more readable code with no side effects.</p>
          </Col>
        </Row>
        {/*
        <p>Flexible, responsive, and reusable grid and flexbox modules control page structure across a wide variety of devices.</p>
        */}
      </Section>
    )
  }

}

export default Categories

