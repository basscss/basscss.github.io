
import React from 'react'

class Section extends React.Component {

  render () {
    return (
      <section className='py3'>
        {this.props.children}
      </section>
    )
  }
}

export default Section

