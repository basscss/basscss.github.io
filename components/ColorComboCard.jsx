
import React from 'react'

class ColorComboCard extends React.Component {

  render () {
    let combo = this.props.combo
    let styles = {
      container: {
        color: combo.color.hex,
        backgroundColor: combo.combo.hex
      },
      heading: {
        fontSize: '6vw',
        lineHeight: 1,
        fontWeight: 'bold',
      }
    }
    let a11y = combo.combo.accessibility
    let rating = false
    if (a11y.aaa) {
      rating = 'AAA'
    } else if (a11y.aa) {
      rating = 'AA'
    } else if (a11y.aaLarge) {
      rating = 'AA Large'
    }
    let id = combo.color.name + '-on-' + combo.combo.name

    return (
      <div id={id}
        className='p3'
        style={styles.container}>
        <a href={'#' + id}
          className='block color-inherit'
          style={styles.heading}>
          {rating} {combo.combo.contrast.toFixed(2)}
        </a>
        <h3 className='m0'>
          {combo.color.name} on {combo.combo.name}
          {' '}
          <span className='h4'>{combo.color.hex} / {combo.combo.hex}</span>
        </h3>
        <pre className='p0 border-none'>.{combo.color.name} .bg-{combo.combo.name}</pre>
      </div>
    )
  }
}

export default ColorComboCard

