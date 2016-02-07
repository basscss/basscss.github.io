
import React from 'react'
import favicon from 'basscss-logo/images/basscss-32.png'
import touchicon from 'basscss-logo/images/basscss-512.png'
import data from '../data'
import GoogleAnalytics from './GoogleAnalytics'

import basscss from 'basscss/css/basscss.min.css'
import highlight from 'basscss-highlight/index.css'
import basic from 'basscss-basic/index.css'
import forms from '../forms.css'
import base from '../base.css'

const css = [
  basic,
  forms,
  basscss,
  base,
  highlight,
].join('\n')

class Root extends React.Component {

  render() {
    const view = React.cloneElement(this.props.children, data)

    if (typeof document !== 'undefined') {
      console.log('client render')
      return (
        <div>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          {view}
        </div>
      )
    } else {
      console.log('server render')
      return (
        <html>
          <head>
            <meta charSet='utf-8' />
            <title>Basscss</title>
            <meta name='description' content={this.props.description} />
            <meta name='author' content={this.props.author.name} />
            <meta name='keywords' content={this.props.keywords.join(', ')} />
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <link href='https://fonts.googleapis.com/css?family=Roboto+Mono'
              rel='stylesheet'
              type='text/css' />
            <link rel='icon' href={favicon} />
            <link rel='apple-touch-icon-precomposed' href={touchicon} />
          </head>
          <body>
            {view}
            <GoogleAnalytics />
          </body>
        </html>
      )
    }

  }

}

export default Root

