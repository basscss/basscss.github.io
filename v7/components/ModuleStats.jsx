
import React from 'react'

class ModuleState extends React.Component {

  render () {
    let stats = this.props.stats

    return (
      <div className='h6 caps compact bold py2 sm-flex flex-wrap flex-justify mxn2'>
        <div className='px2'>{stats.rules.length} Rules</div>
        <div className='px2'>{stats.selectors.length} Selectors</div>
        <div className='px2'>{stats.declarations.all.length} Declarations</div>
        <div className='px2'>{stats.aggregates.properties.length} Properties</div>
      </div>
    )
  }

}

export default ModuleState

