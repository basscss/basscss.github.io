
import React from 'react'

const Col = ({ x, sm, md, lg, max, ...props }) => (
  <div {...props}
    className={[
      'px2',
      x ? `col-${x}` : '',
      sm ? `sm-col-${sm}` : '',
      md ? `md-col-${md}` : '',
      lg ? `lg-col-${lg}` : '',
      max ? `max-width-${max}` : ''
    ].join(' ')} />
)

const widths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

Col.propTypes = {
  x: React.PropTypes.oneOf(widths),
  sm: React.PropTypes.oneOf(widths),
  md: React.PropTypes.oneOf(widths),
  lg: React.PropTypes.oneOf(widths),
  max: React.PropTypes.oneOf([1, 2, 3, 4])
}

export default Col

