
import React from 'react'

const Space = ({ x, ...props }) => (
  <div className='inline-block'
    style={{ width: x }} />
)

Space.propTypes = {
  x: React.PropTypes.number
}

Space.defaultProps = {
  x: 16
}

export default Space
