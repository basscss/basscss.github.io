
import React from 'react'

class StylesTable extends React.Component {

  render () {
    return (
      <table className='StylesTable'>
        <thead>
          <tr>
            <th>Selectors</th>
            <th>Declarations</th>
          </tr>
        </thead>
        <tbody>
          {this.props.rules.map(function(rule, i) {
            if (rule.selector === ':root') {
              return false
            }
            return (
              <tr key={i}>
                <td>
                  {rule.selector}
                </td>
                <td>
                  {rule.declarations.map(function(dec, i) {
                    return (
                      <span key={i}>
                        {dec.prop}: {dec.value};{' '}
                      </span>
                    )
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

}

export default StylesTable

