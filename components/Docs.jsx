
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
    let navitems = this.props.routes.concat(this.props.links)
    return (
      <div>
        <Main>
          <div className='sm-hide fixed top-0 right-0 m1'>
            <a href='#menu'
              className='btn btn-small btn-primary black bg-darken-3'>
              Menu
            </a>
          </div>
          <Container>
            <RouteHandler {...this.props} />
          </Container>
          <SideBar>
            <a href='/' className='block px2'>
              <Logo size={24} />
            </a>
            <Nav {...this.props} items={navitems} />
          </SideBar>
          <Footer {...this.props} />
        </Main>
      </div>
    )
  }

}

export default Docs

