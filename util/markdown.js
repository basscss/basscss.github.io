
import marked from 'marked'
import hljs from 'highlight.js'
import { kebabCase } from 'lodash'

import React from 'react'
import Example from '../components/Example.jsx'

var renderer = new marked.Renderer()

renderer.code = function(code, lang) {
  var result
  if (lang && lang.match(/^html/)) {
    result = React.renderToStaticMarkup(React.createElement(Example, { html: code }))
    /*
    result = [
      '<div>',
        '<div>',
          code,
        '</div>',
        '<pre>',
          hljs.highlight(lang, code).value,
        '</pre>',
      '</div>'
    ].join('')
    */
  } else {
    result = [
      '<pre>',
        hljs.highlightAuto(code, [lang]).value,
      '</pre>'
    ].join('')
  }
  return result
}

renderer.heading = function (text, level) {
  var name = kebabCase(text)
  var result
  if (level < 4) {
    result =
      '<h' + level + ' id="' + name + '">'+
      '<a href="#' + name + '">'+ text + '</a>'+
      '</h' + level + '>'
  } else {
    result = '<h' + level + '>' + text + '</h' + level + '>'
  }
  return result
}


export default function(md) {
  if (!md) { return false }
  return marked(md, { renderer: renderer })
}

