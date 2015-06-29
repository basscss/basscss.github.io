
import React from 'react'
import Page from './Page.jsx'
import StylesTable from './StylesTable.jsx'
import Link from './Link.jsx'

class Styles extends React.Component {

  render () {
    let styles = {
      section: {
        clear: 'both'
      }
    }

    return (
      <Page {...this.props.route}>
        {this.props.modules.map(function(mod, i) {
          return (
            <section key={i}
              id={mod.slug}
              className='py3'
              style={styles.section}>
              <div className='flex flex-wrap'>
                <h2 className='flex-auto m0'>
                  <a href={'#' + mod.slug}>
                    {mod.title}
                  </a>
                  <span className='h5'> v{mod.version}</span>
                </h2>
                <Link
                  path={'/docs/' + mod.slug}
                  title='View Docs'
                  flush />
              </div>
              <StylesTable rules={mod.stats.rules} />
            </section>
          )
        })}
      </Page>
    )
  }

}

export default Styles

