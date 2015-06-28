
import React from 'react'
import PageHeader from './PageHeader.jsx'

class OptionalModules extends React.Component {

  render () {
    let route = this.props.route
    return (
      <main>
        <PageHeader
          {...route} />
        <p>The following modules are not included in the default Basscss package, but can be installed via npm.</p>
        <ul className='list-reset'>
          {this.props.optionals.map(function(mod, i) {
            return (
              <li key={i} className='mb3'>
                <a href={mod.npm_link}
                  className='block color-inherit'>
                  <h3 className='m0'>{mod.title}</h3>
                  <h4 className='m0'>{mod.name} v{mod.version}</h4>
                  <p className='m0'>{mod.description}</p>
                </a>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }

}

export default OptionalModules

