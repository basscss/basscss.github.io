
import React from 'react'
import titleCase from 'title-case'
import Link from './Link.jsx'

class Breadcrumbs extends React.Component {

  render () {
    var breadcrumbs = []
    if (this.props.path) {
      var breadcrumbs = this.props.path.split('/')
    }
    breadcrumbs = breadcrumbs
      .map(function(c, i, arr) {
        var parents = []
        function getParents(i) {
          parents.unshift(arr[i])
          if (arr[i - 1]) {
            getParents(i - 1)
          }
        }
        getParents(i)
        return {
          title: titleCase(c.replace(/\-/, ' ')),
          path: '/v7/' + parents.join('/')
        }
      })
      .filter(function(c) {
        return c.title
      })

    return (
      <div className='h5 mxn1'>
        <Link path='/v7' title='Home' />
        {breadcrumbs.map(function(crumb, i) {
          return (
            <span className='' key={i}>
              <span className='muted'> / </span>
              <Link {...crumb} />
            </span>
          )
        })}
      </div>
    )
  }

}

export default Breadcrumbs

