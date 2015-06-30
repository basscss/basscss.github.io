
import React from 'react'
import clrs from 'colors.css'

class BaseIllustration extends React.Component {

  render () {
    let styles = {
      svg: {
        width: 128,
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '100%'
      },
      rect: {
        fill: 'none',
        stroke: clrs.blue,
        strokeWidth: 2
      },
      text: {
        fontFamily: 'inherit',
        fontSize: 160,
        fontWeight: 'bold',
        textAnchor: 'middle',
        fill: clrs.blue
      }
    }
    let width = 256
    let height = 256
    let baseline = .75 * height
    return (
      <svg viewBox={[0, 0, width, height].join(' ')}
        style={styles.svg}>
        <rect x='2'
          y='2'
          width={width - 4}
          height={height - 4}
          style={styles.rect} />
        <text
          x={width / 2}
          y={baseline}
          style={styles.text}>
          Aa
        </text>
      </svg>
    )
  }

}

export default BaseIllustration

