
import React from 'react'
import PageHeader from './PageHeader.jsx'

class References extends React.Component {

  render () {
    return (
      <main>
        <PageHeader
          title='References'
          path={this.props.router.path} />
      </main>
    )
  }

}

export default References

