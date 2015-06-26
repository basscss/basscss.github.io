
import React from 'react'

class Main extends React.Component {

  render () {
    return (
      <main className='Main'>
        {this.props.children}
      </main>
    )
  }

}

export default Main

