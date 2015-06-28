
import React from 'react'
import markdown from '../util/markdown'
import Page from './Page.jsx'
import Prose from './Prose.jsx'

class Guide extends React.Component {

  render () {
    let guide = this.props.guide
    let html = {
      __html: markdown(guide.md)
    }
    return (
      <Page {...guide}>
        <Prose>
          <div dangerouslySetInnerHTML={html} />
        </Prose>
      </Page>
    )
  }

}

export default Guide

