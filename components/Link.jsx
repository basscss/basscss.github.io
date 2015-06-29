
import React from 'react'
import cx from 'classnames'

class Link extends React.Component {

  render () {
    let text = this.props.text || this.props.title
    let target = this.props.external ? '_blank' : null

    return (
      <a href={this.props.path}
        title={this.props.title}
        target={target}
        className={cx('btn compact btn-link', {
          'p1': !this.props.flush,
          'p0 py1': this.props.flush,
          block: this.props.block,
          'align-baseline': this.props.baseline,
          'h4': this.props.big
        })}>
        {text}
      </a>
    )
  }

}

Link.propTypes = {
  title: React.PropTypes.node,
  path: React.PropTypes.string,
  text: React.PropTypes.node,
  external: React.PropTypes.bool,
  block: React.PropTypes.bool,
  big: React.PropTypes.bool,
  flush: React.PropTypes.bool,
  baseline: React.PropTypes.bool,
}

export default Link

