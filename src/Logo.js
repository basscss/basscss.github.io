import React from 'react'

class Logo extends React.Component {
  render () {
    let size = this.props.size
    let amp = this.props.amplitude
    let l = this.props.wavelength
    let r = this.props.strokeWidth
    let ratio = this.props.ratio

    let w = 32
    let c = w / 2
    let x1 = c - ratio * l
    let x2 = c - l
    let x3 = c + l
    let x4 = c + ratio * l
    let viewBox = [0, 0, w, w].join(' ')
    let fill = this.props.fill

    let rad = function(a) {
      return Math.PI * a / 180
    }

    let deg = function(r) {
      return r * 180/Math.PI
    }

    // Points around circle for stroke width
    var rx = function(c, n) {
      return c + r * Math.cos(rad(n))
    }

    var ry = function(c, n) {
      return c + r * Math.sin(rad(n))
    }

    // angle based on slope
    let n = deg(Math.atan(amp/l))
    let n1 = n - 90
    let n2 = n + 90

    // vertex based on intersection point
    let vertex = function(x1, y1, x) {
      let m = -amp / l // slope
      let y = m * (x1 - x) + y1
      return y
    }

    let styles = {
      guide: {
        fill: 'none',
        stroke: 'rgba(255,0,0,.25)',
        strokeWidth: .0625
      },
      grid: {
        fill: 'none',
        stroke: 'rgba(0,0,255,.25)',
        strokeWidth: .0625
      }
    }

    let d = [
      'M',
      rx(x1, n1),
      ry(c, n2),
      'L',
      x2,
      vertex(rx(c, n1), ry(c, n1), x2),
      'L',
      x3,
      vertex(rx(c, n1), ry(c, n1), x3),
      'L',
      rx(x4, n2),
      ry(c, n - 90),
      'L',
      x3,
      vertex(rx(c, n2), ry(c, n2), x3),
      'L',
      x2,
      vertex(rx(c, n2), ry(c, n2), x2),
      'L',
      rx(x1, n1),
      ry(c, n2)
    ].join(' ')

    let guides = false
    if (this.props.guides) {
      guides = (
        <g style={styles.guide}>
          <path d={[
              'M', c, 0,
              'L', c, w,
              'M', 0, c,
              'L', w, c,
              'M', 0, 0,
              'L', w, 0,
              'L', w, w,
              'L', 0, w,
              'L', 0, 0,
              'M', c - l, 0,
              'L', c - l, w,
              'M', c + l, 0,
              'L', c + l, w,
              'M', 0, c - amp,
              'L', w, c - amp,
              'M', 0, c + amp,
              'L', w, c + amp,
            ].join(' ')} />
        </g>
      )
    }

    let grid = false
    if (this.props.grid) {
      function xGrid() {
        let lines = ['M 0 0']
        for (var i = 0; i < w; i++) {
          lines.push([
            'L', i, w,
            'M', i + 1, 0
          ].join(' '))
        }
        return lines.join(' ')
      }
      function yGrid() {
        let lines = ['M 0 0']
        for (var i = 0; i < w; i++) {
          lines.push([
            'L', w, i,
            'M', 0, i + 1
          ].join(' '))
        }
        return lines.join(' ')
      }
      grid = (
        <path style={styles.grid}
          d={[ xGrid(), yGrid() ].join(' ')} />
      )
    }

    return (
      <svg viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}>
        {grid}
        {guides}
        <path d={d} />
      </svg>
    )
  }

}

Logo.defaultProps = {
  size: 48,
  amplitude: 5,
  wavelength: 6.75,
  ratio: 2.5,
  strokeWidth: 2,
  fill: 'currentcolor',
  guides: false,
  grid: false,
}

export default Logo
