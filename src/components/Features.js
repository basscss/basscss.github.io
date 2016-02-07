
import React from 'react'
import SectionTitle from './SectionTitle'
import Row from './Row'
import Col from './Col'

const Features = ({ features, ...props }) => (
  <section id='features' className='py4'>
    <SectionTitle name='features'
      children='Lightning Fast Modular CSS with No Side Effects' />
    <Row wrap>
      {features.map((feature, i) => (
        <Col key={i} x={12} sm={6} md={4}>
          <h3 children={feature.title} />
          <p children={feature.description} />
        </Col>
      ))}
    </Row>
  </section>
)

export default Features

