
import React from 'react'

class Prose extends React.Component {

  render () {
    return (
      <div className='Prose mb4'>
        {this.props.children}
      </div>
    )
  }

}

export default Prose

