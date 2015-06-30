
import React from 'react'
import Page from './Page.jsx'
import LinkList from './LinkList.jsx'

class OptionalModules extends React.Component {

  render () {
    let route = this.props.route
    let links = this.props.optionals.map(function(mod) {
      mod.path = '//npmjs.com/package/' + mod.name
      return mod
    })

    return (
      <Page {...route}>
        <p className='h3'>The following modules are not included in the default Basscss package, but can be installed via npm.</p>
        <p>Note: some optional modules, such as buttons and the table object, may conflict with the latest version of Basscss. Be sure to check the source for each module when including one with other modules.</p>
        <LinkList items={links} />
      </Page>
    )
  }

}

export default OptionalModules

