
import React from 'react'
import ModuleDoc from './ModuleDoc'

const Docs = ({ modules, ...props }) => (
  <div className=''>
    {modules.map(mod => <ModuleDoc key={mod.name} {...mod} />)}
  </div>
)

export default Docs
