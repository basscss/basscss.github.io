
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import Home from './components/Home'

const div = document.createElement('div')
document.body.appendChild(div)
ReactDOM.render(<Root children={<Home />} />, div)

