
import React from 'react'
import css from '../css/base.css'

class Head extends React.Component {

  render () {
    return (
      <head>
        <meta charSet='utf-8' />
        <title>{this.props.title}</title>
        <meta name='description' content={this.props.description} />
        <meta name='author' content={this.props.author} />
        <meta name='keywords' content={this.props.keywords.join(', ')} />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon-precomposed' href='/apple-touch-icon.png' />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
    )
  }

}

export default Head

