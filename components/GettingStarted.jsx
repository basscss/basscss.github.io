
import React from 'react'
import PageHeader from './PageHeader.jsx'
import Prose from './Prose.jsx'
import Pre from './Pre.jsx'
import Link from './Link.jsx'

class GettingStarted extends React.Component {

  render () {
    let stylesheetLink = [
      '<link href="http://d2v52k3cl9vedd.cloudfront.net/basscss/',
      this.props.version,
      '/basscss.min.css" rel="stylesheet">'
    ].join('')

    return (
      <div>
        <PageHeader title='Getting Started' />
        <Prose>
          <p className='h3'>Download or install from one of these sources</p>
          <Pre>npm install basscss</Pre>
          <Pre>bower install basscss</Pre>
          <Pre>git clone {this.props.repository.url}</Pre>
          <div className='py2'>
            <a href={'https://github.com/basscss/basscss/archive/v' + this.props.version + '.zip'}
              className='h4 btn btn-primary'>
              Download Source
            </a>
          </div>
          <p>Or use the CDN link:</p>
          <Pre>{stylesheetLink}</Pre>
          <hr />
          <p className='h3'>
            Basscss is composed of {this.props.modules.length} modules - each available in standalone format on npm.
          </p>
          <div className='clearfix mxn1'>
            {this.props.modules.map(function(mod, i) {
              return (
                <div key={i} className='col col-6 sm-col-4 md-col-3'>
                  <Link {...mod} path={'/docs/' + mod.slug} />
                </div>
              )
            })}
          </div>
        </Prose>
      </div>
    )
  }

}

export default GettingStarted

