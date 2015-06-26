
import React from 'react'
import titleCase from 'title-case'

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
          path: '/' + parents.join('/')
        }
      })
      .filter(function(c) {
        return c.title
      })

    return (
      <div className='h5'>
        <a href='/' className='btn p0 py1 blue'>Home</a>
        {breadcrumbs.map(function(crumb, i) {
          return (
            <span className='' key={i}>
              <span className='muted'> / </span>
              <a href={crumb.path} className='btn p0 py1 blue'>
                {crumb.title}
              </a>
            </span>
          )
        })}
      </div>
    )
  }

}

export default Breadcrumbs

