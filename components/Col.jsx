
import React from 'react'

class Col extends React.Component {

  render () {
    let { xs, sm, md, lg, flush, compact } = this.props
    let classNames = []
    if (xs) {
      classNames.push('col')
    } else if (sm) {
      classNames.push('sm-col')
    } else if (md) {
      classNames.push('md-col')
    } else if (lg) {
      classNames.push('lg-col')
    }
    if (xs) {
      classNames.push('col-' + xs)
    }
    if (sm) {
      classNames.push('sm-col-' + sm)
    }
    if (md) {
      classNames.push('md-col-' + md)
    }
    if (lg) {
      classNames.push('lg-col-' + lg)
    }
    if (!flush) {
      classNames.push('px2')
    }
    if (!compact) {
      classNames.push('mb3')
    }

    return (
      <div className={classNames.join(' ')}>
        {this.props.children}
      </div>
    )
  }

}

export default Col

