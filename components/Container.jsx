
import React from 'react'

class Container extends React.Component {

  render () {
    let style = {
      maxWidth: this.props.wide ? '64rem' : false
    }
    return (
      <div className='container px2 sm-px3'
        style={style}>
        {this.props.children}
      </div>
    )
  }

}

export default Container

