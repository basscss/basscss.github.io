
import React from 'react'
import Row from './Row'
import Col from './Col'

const Testimonials = ({ quotes, ...props }) => (
  <section id='testimonials' className='py4'>
    <Row wrap>
      {quotes.map((quote, i) => (
        <Col key={i} x={12} sm={6} md={4}>
          <blockquote className='m0 mb2'>
            <p className='palatino mb0'>“{quote.text}”</p>
            <cite className='h5'>
              <a href={quote.href} className='color-inherit text-decoration-none'>
                – {quote.source}
              </a>
            </cite>
          </blockquote>
        </Col>
      ))}
    </Row>
  </section>
)

export default Testimonials

