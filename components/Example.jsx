
import React from 'react'
import hljs from 'highlight.js'

class Example extends React.Component {

  render () {
    let code = hljs.highlight('html', this.props.html).value

    return (
      <div className='border rounded'>
        <div className='p2'
          dangerouslySetInnerHTML={{ __html: this.props.html }} />
        <pre className='p2 m0 bg-darken-1'
          dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    )
  }

}

Example.propTypes = {
  html: React.PropTypes.string
}

export default Example

