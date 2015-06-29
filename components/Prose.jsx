
import React from 'react'

class Prose extends React.Component {

  render () {
    let html = {
      __html: this.props.html
    }
    if (this.props.html) {
      return (
        <div className='Prose mb4'
          dangerouslySetInnerHTML={html} />
      )
    } else {
      return (
        <div className='Prose mb4'>
          {this.props.children}
        </div>
      )
    }
  }

}

export default Prose

