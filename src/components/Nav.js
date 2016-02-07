
import React from 'react'
import NavItem from './NavItem'
import Row from './Row'
import Col from './Col'

const Nav = ({ items, id, ...props }) => (
  <nav id={id} className='pl2 my2 border-left border-thick border-darken'>
    <div style={{ maxWidth: 768 }}>
      <Row wrap>
        {items.map((item, i) => (
          <Col key={i} x={6} sm={4} md={3}>
            <NavItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  </nav>
)

export default Nav

