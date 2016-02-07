
import React from 'react'

class LinkList extends React.Component {

  render () {
    return (
      <ul className='list-reset'>
        {this.props.items.map(function(item, i) {
          let desc = false
          if (item.description) {
            desc = <p className='m0'>{item.description}</p>
          }
          return (
            <li key={i}
              className='mb3'>
              <a href={`/v7${item.path}`}
                className='block color-inherit'>
                <h3 className='m0'>
                  {item.title}
                </h3>
                {desc}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

}

export default LinkList

