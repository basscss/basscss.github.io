
import React from 'react'

class Main extends React.Component {

  render () {
    let styles = {
      container: {
        marginLeft: '12rem'
      }
    }

    return (
      <main style={styles.container}>
        {this.props.children}
      </main>
    )
  }

}

export default Main

