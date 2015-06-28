
import React from 'react'
import markdown from '../util/markdown'
import PageHeader from './PageHeader.jsx'
import Prose from './Prose.jsx'

class Guide extends React.Component {

  render () {
    let guide = this.props.guide
    let html = {
      __html: markdown(guide.md)
    }
    return (
      <main>
        <PageHeader {...guide} />
        <Prose>
          <div dangerouslySetInnerHTML={html} />
        </Prose>
      </main>
    )
  }

}

export default Guide

