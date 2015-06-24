
import React from 'react'
import Router from 'react-router'
import Routes from './Routes.jsx'

export default function render(locals, callback) {
  Router.run(Routes, locals.path, function (Handler, state) {
    locals.state = state
    let html = React.renderToStaticMarkup(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}

