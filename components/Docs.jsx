
import React from 'react'
import { RouteHandler } from 'react-router'
import SideBar from './SideBar.jsx'
import Main from './Main.jsx'
import Container from './Container.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

class Docs extends React.Component {

  render () {
    return (
      <div>
        <Main>
          <Container>
            <RouteHandler {...this.props} />
            <Footer {...this.props} />
          </Container>
        </Main>
        <SideBar>
          <Nav items={this.props.routes} />
        </SideBar>
      </div>
    )
  }

}

export default Docs

