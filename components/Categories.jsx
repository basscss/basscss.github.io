
import React from 'react'
import Section from './Section.jsx'

class Categories extends React.Component {

  render () {
    return (
      <Section>
        <h2>Base Elements</h2>
        <p>Core typographic, form, button, and base element styles keep designs consistent where it matters most.</p>
        <h2>Immutable Utilities</h2>
        <p>Simple, composable typographic and layout utilities based on common scales promote faster design and development in the browser and more performant, more readable code with no side effects.</p>
        <p>Flexible, responsive, and reusable grid and flexbox modules control page structure across a wide variety of devices.</p>
        <h2>Color Utilities</h2>
        <p>Simple, customizable color utilities encourage iterative design and allow for flexibility over time. Featuring colors from mrmrs/colors.</p>
      </Section>
    )
  }

}

export default Categories

