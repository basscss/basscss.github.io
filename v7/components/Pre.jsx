
import React from 'react'

class Pre extends React.Component {

  render () {
    let style = {
      borderLeftWidth: 4,
      maxHeight: '30vh',

    }
    return (
      <pre style={style} className='px2 not-rounded border-left'>{this.props.children}</pre>
    )
  }

}

export default Pre

