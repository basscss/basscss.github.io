
import React from 'react'
import PageHeader from './PageHeader.jsx'
import Link from './Link.jsx'

class Guides extends React.Component {

  render () {
    let guides = this.props.guides
    return (
      <main>
        <PageHeader title='Guides' />
        <div className='mxn1'>
          {guides.map(function(guide, i) {
            return (
              <div key={i}>
                <Link {...guide} path={'/docs/guides/' + guide.name} />
              </div>
            )
          })}
        </div>
      </main>
    )
  }

}

export default Guides

