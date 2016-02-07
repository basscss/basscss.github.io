
import React from 'react'
import Section from './Section.jsx'
import Row from './Row.jsx'
import Col from './Col.jsx'
import Link from './Link.jsx'

class ValueProps extends React.Component {

  render () {
    return (
      <Section>
        <Row>
          <Col sm={6}>
            <h2>Code with Confidence</h2>
            <p>Using clear, humanized naming conventions, Basscss is quick to internalize and easy to reason about while speeding up development time with more scalable, more readable code.</p>
          </Col>
          <Col sm={6}>
            <h2>No Side Effects</h2>
            <p>Things behave exactly as expected with immutable utilities and styles that follow the open/closed principle to help prevent common pitfalls with CSS.</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h2>Composable</h2>
            <p>Reusable, interoperable styles work like building blocks to lay the foundation for any stylesheet and can be mixed and matched in any number of combinations.</p>
          </Col>
          <Col sm={6}>
            <h2>Designed for Design</h2>
            <p>Basscss strikes a balance between consistency and flexibility to allow for rapid prototyping and quick iterative changes when designing in the browser.</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h2>Responsive by Default</h2>
            <p>Basscss provides lightweight, performant styles and flexible utilities to design for any device and to help reduce boilerplate in stylesheets.</p>
          </Col>
          <Col sm={6}>
            <h2>Unassuming</h2>
            <p>Modular and customizable base, typography, layout, and color styles don’t dictate what things should look like and play well with other stylesheets and frameworks.</p>
          </Col>
        </Row>
        <div>
          <Link
            path='/v7/docs/reference/principles'
            title='Read more about Basscss’s design principles'
            flush
            big />
        </div>
      </Section>
    )
  }

}

export default ValueProps

