
import React from 'react'
import { find } from 'lodash'
import Router from 'react-router'
import Routes from '../Routes.jsx'

export default function render(locals, callback) {
  Router.run(Routes, locals.path, function (Handler, state) {

    locals.router = state
    locals.route = find(locals.routes, function(route) {
      return route.path === state.path
    })
    if (state.params) {
      if (state.params.module) {
        locals.module = find(locals.modules, function(mod) {
          return mod.slug === state.params.module
        })
      } else if (state.params.guide) {
        locals.guide = find(locals.routes, function(route) {
          return route.name === state.params.guide
        })
      }
    }

    let html = React.renderToStaticMarkup(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}

