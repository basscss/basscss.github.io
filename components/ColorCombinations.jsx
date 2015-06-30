
import React from 'react'
import clrs from 'colors.css'
import colorable from 'colorable'
import Page from './Page.jsx'
import ColorComboCard from './ColorComboCard.jsx'

class ColorCombinations extends React.Component {

  render () {
    let combos = []
    let colors = colorable(clrs, { threshold: 3 })
    colors.forEach(function(color) {
      color.combinations.forEach(function(combo) {
        combos.push({
          color: color,
          combo: combo
        })
      })
    })
    combos = combos.sort(function(a, b) {
      return b.combo.contrast - a.combo.contrast
    })

    let styles = {
      combos: {
        clear: 'both'
      }
    }

    return (
      <Page {...this.props.route}>
        <p className='h3'>
          Basscss’s default color palette has {combos.length} readable color combinations. 
        </p>
        <div style={styles.combos}>
          {combos.map(function(combo, i) {
            return <ColorComboCard key={i} combo={combo} />
          })}
        </div>
      </Page>
    )
  }

}

export default ColorCombinations

