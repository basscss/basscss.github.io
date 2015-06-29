
import React from 'react'
import markdown from '../util/markdown'
import Page from './Page.jsx'
import Prose from './Prose.jsx'

class Reference extends React.Component {

  render () {
    let body = false
    let md = this.props.route.md
    if (md) {
      body = markdown(md)
    }
    return (
      <Page {...this.props.route}>
        <Prose html={body} />
      </Page>
    )
  }

}

export default Reference

