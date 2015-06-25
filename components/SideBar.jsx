
import React from 'react'

class SideBar extends React.Component {

  render () {
    let styles = {
      container: {
        width: '12rem',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',

        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0
      }
    }

    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    )
  }

}

export default SideBar

