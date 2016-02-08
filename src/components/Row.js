
import React from 'react'

const Row = ({ sm, md, lg, wrap, items, ...props }) => (
  <div {...props}
    className={[
      'mxn2',
      (!sm && !md && !lg) ? 'flex' : '',
      sm ? 'sm-flex' : '',
      md ? 'md-flex' : '',
      lg ? 'lg-flex' : '',
      wrap ? 'flex-wrap' : '',
      items ? `items-${items}` : null
    ].join(' ')} />
)

Row.propTypes = {
  x: React.PropTypes.bool,
  sm: React.PropTypes.bool,
  md: React.PropTypes.bool,
  lg: React.PropTypes.bool,
  wrap: React.PropTypes.bool,
  items: React.PropTypes.oneOf([
    'center',
    'baseline',
    'start',
    'end',
    'stretch',
  ]),
}

export default Row

