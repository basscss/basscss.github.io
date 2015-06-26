
import React from 'react'

class Link extends React.Component {

  render () {
    return (
      <a href={this.props.path}
        className='btn compact p1 btn-link'>
        {this.props.title}
      </a>
    )
  }

}

export default Link

