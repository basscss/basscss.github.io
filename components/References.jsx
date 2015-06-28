
import React from 'react'
import Page from './Page.jsx'

class References extends React.Component {

  render () {
    return (
      <Page {...this.props.route}>
        {this.props.references.map(function(reference) {
          return (
            <div>{reference.title}</div>
          )
        })}
      </Page>
    )
  }

}

export default References

