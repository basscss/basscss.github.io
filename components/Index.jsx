
import React from 'react'
import Container from './Container.jsx'
import Link from './Link.jsx'

class Index extends React.Component {

  render () {
    return (
      <Container>
        <h1>Basscss</h1>
        <Link path='/docs' title='Docs' />
      </Container>
    )
  }

}

export default Index

