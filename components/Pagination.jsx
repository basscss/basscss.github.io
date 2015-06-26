
import React from 'react'
import NavItem from './NavItem.jsx'

class Pagination extends React.Component {

  render () {
    return (
      <div className='py4 flex flex-center mxn2'>
        <NavItem {...this.props.previous} />
        <div className='flex-auto' />
        <NavItem {...this.props.next} />
      </div>
    )
  }

}

export default Pagination

