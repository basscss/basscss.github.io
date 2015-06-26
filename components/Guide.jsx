
import React from 'react'
import { find } from 'lodash'
import markdown from '../util/markdown'
import PageHeader from './PageHeader.jsx'

class Guide extends React.Component {

  render () {
    let routes = this.props.routes
    let params = this.props.params 
    let guide = find(routes, function(route) {
      return route.name === params.guide
    }) || false
    let html = {
      __html: markdown(guide.md)
    }
    return (
      <main>
        <PageHeader title={guide.title} />
        <div dangerouslySetInnerHTML={html} />
      </main>
    )
  }

}

export default Guide

