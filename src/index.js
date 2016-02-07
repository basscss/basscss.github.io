
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Root from './components/Root'
import Home from './components/Home'
import NotFound from './components/NotFound'

module.exports = function render(locals, callback) {
  let html

  if (locals.path.match(/404/)) {
    html = ReactDOMServer.renderToString(<Root {...locals} children={<NotFound />} />)
  } else {
    html = ReactDOMServer.renderToString(<Root {...locals} children={<Home />} />)
  }

  callback(null, `<!DOCTYPE html>${html}`)
}

