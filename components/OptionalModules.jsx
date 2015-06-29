
import React from 'react'
import Page from './Page.jsx'
import LinkList from './LinkList.jsx'

class OptionalModules extends React.Component {

  render () {
    let route = this.props.route
    let links = this.props.optionals.map(function(mod) {
      mod.path = '/docs/' + mod.slug
      return mod
    })

    return (
      <Page {...route}>
        <p>The following modules are not included in the default Basscss package, but can be installed via npm.</p>
        <LinkList items={links} />
      </Page>
    )
  }

}

export default OptionalModules

