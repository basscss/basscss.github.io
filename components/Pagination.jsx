
import React from 'react'
import Icon from 'react-geomicons'
import Link from './Link.jsx'

class Pagination extends React.Component {

  render () {
    let previous = this.props.previous || false
    let next = this.props.next || false
    let previousLink = previous ? (
      <Link {...previous}
        title={
          <span>
            <Icon name='chevronLeft' className='icon' /> {previous.title}
          </span>
        } />
    ) : false
    let nextLink = next ? (
      <Link {...next}
        title={
          <span>
            {next.title} <Icon name='chevronRight' className='icon' />
          </span>
        } />
    ) : false

    return (
      <div className='py4 flex flex-center mxn1'>
        {previousLink}
        <div className='flex-auto' />
        {nextLink}
      </div>
    )
  }

}

export default Pagination

