
import React from 'react'
import Logo from 'basscss-logo'
import SideBar from './SideBar.jsx'
import Main from './Main.jsx'
import Container from './Container.jsx'
import Page from './Page.jsx'
import Nav from './Nav.jsx'
import Header from './Header.jsx'
import Intro from './Intro.jsx'
import Footer from './Footer.jsx'

class FourOhFour extends React.Component {

  render () {
    let navitems = this.props.routes.concat(this.props.links)
    return (
      <Main>
        <Container>
          <Page title='Page Not Found' >
            <a href='/' className='inline-block'>
              <Logo size={128} />
            </a>
            <h1 className='m0'>404</h1>
          </Page>
        </Container>
        <SideBar>
          <a href='/' className='block px2'>
            <Logo size={24} />
          </a>
          <Nav {...this.props} items={navitems} />
        </SideBar>
        <Footer {...this.props} />
      </Main>
    )
  }

}

export default FourOhFour

