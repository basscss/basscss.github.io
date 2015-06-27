
import React from 'react'
import filesize from 'filesize'

class Stats extends React.Component {

  render () {
    let stats = this.props
    let size = filesize(stats.gzipSize)
    let modules = this.props.modules.length
    let rules = stats.rules.length
    let decs = stats.declarations.all.length

    return (
      <div className='h6 caps compact bold flex flex-justify flex-wrap mxn2'>
        <div className='px2'>{size}</div>
        <div className='px2'>{modules} Modules</div>
        <div className='px2'>{rules} Rules</div>
        <div className='px2'>{decs} Declarations</div>
      </div>
    )
  }

}

export default Stats

