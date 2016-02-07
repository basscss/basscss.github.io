
import React from 'react'
import data from '../data'

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

    const webfont = <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' type='text/css' />

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
            {webfont}
            <style dangerouslySetInnerHTML={{ __html: css }} />
          </head>
          <body>
            {view}
          </body>
        </html>
      )
    }

  }

}

export default Root

