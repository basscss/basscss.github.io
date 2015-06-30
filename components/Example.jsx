
import React from 'react'
import hljs from 'highlight.js'

class Example extends React.Component {

  render () {
    let code = hljs.highlight('html', this.props.html).value

    return (
      <div className='Example mb2 border rounded'>
        <div className='p2 border-bottom'
          dangerouslySetInnerHTML={{ __html: this.props.html }} />
        <pre className='p2 m0 border-none'
          dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    )
  }

}

Example.propTypes = {
  html: React.PropTypes.string
}

export default Example

