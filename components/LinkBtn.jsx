
import React from 'react'
import cx from 'classnames'

class LinkBtn extends React.Component {

  render () {
    let text = this.props.text || this.props.title
    let target = this.props.external ? '_blank' : null

    return (
      <a href={this.props.path}
        title={this.props.title}
        target={target}
        className={cx('btn compact btn-primary', {
          block: this.props.block,
          'h4 py2': this.props.big
        })}>
        {text}
      </a>
    )
  }

}

LinkBtn.propTypes = {
  title: React.PropTypes.node,
  path: React.PropTypes.string,
  text: React.PropTypes.node,
  external: React.PropTypes.bool,
  block: React.PropTypes.bool,
  big: React.PropTypes.bool,
}

export default LinkBtn

