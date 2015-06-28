
import React from 'react'
import { RouteHandler } from 'react-router'
import Logo from 'basscss-logo'
import Link from './Link.jsx'
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
          </Container>
          <SideBar>
            <div className='px1'>
              <Link path='/'
                text={<Logo size={24} />} />
            </div>
            <Nav {...this.props} items={this.props.routes} />
          </SideBar>
          <Footer {...this.props} />
        </Main>
      </div>
    )
  }

}

export default Docs

