
import React from 'react'
import Router from 'react-router'
import Routes from '../Routes.jsx'

export default function render(locals, callback) {
  Router.run(Routes, '/404', function (Handler, state) {
    locals.router = state
    locals.route ='/'
    let html = React.renderToStaticMarkup(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}

