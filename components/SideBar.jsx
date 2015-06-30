
import React from 'react'
import script from '../data/sidebar'

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
      <div className='SideBar py2'
        style={styles.container}>
        {this.props.children}
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </div>
    )
  }

}

export default SideBar

