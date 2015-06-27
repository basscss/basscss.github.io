
import React from 'react'
import PageHeader from './PageHeader.jsx'
import Link from './Link.jsx'

class Guides extends React.Component {

  render () {
    let guides = this.props.guides
    let path = this.props.router.path
    return (
      <main>
        <PageHeader
          title='Guides'
          path={path} />
        <div className='mb4'>
          {guides.map(function(guide, i) {
            let desc = guide.description
            return (
              <div key={i} className='mb3'>
                <Link {...guide}
                  path={'/docs/guides/' + guide.name}
                  flush
                  block
                  big />
                <p>{desc}</p>
              </div>
            )
          })}
        </div>
      </main>
    )
  }

}

export default Guides

