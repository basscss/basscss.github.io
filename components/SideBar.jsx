
import React from 'react'

class SideBar extends React.Component {

  render () {
    let styles = {
      container: {
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        top: 0,
        bottom: 0,
        left: 0
      }
    }

    return (
      <div className='SideBar py2 border-right'
        style={styles.container}>
        {this.props.children}
      </div>
    )
  }

}

export default SideBar

