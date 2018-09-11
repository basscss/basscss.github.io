import React from 'react'
import { MDXProvider } from '@mdx-js/tag'

const h1 = props =>
  <h1 {...props} className='h0 mt4 mb2' />

const h2 = props =>
  <h2 {...props} className='h1 mt3 mb2' />

const h3 = props =>
  <h3 {...props} className='h2 mt3 mb2' />

const hr = props =>
  <hr className='my4 border-none border-bottom' />

const blockquote = props =>
  <blockquote {...props} className='m0 h3 bold' />

const p = props =>
  <p {...props} className='mt0 mb2' />

const pre = props =>
  <pre
    {...props}
    className='h5'
    style={{
      fontFamily: 'Menlo, monospace',
      whiteSpace: 'pre-wrap'
    }}
  />

const code = props =>
  <code
    {...props}
    className=''
    style={{
      fontFamily: 'Menlo, monospace'
    }}
  />

export const components = {
  h1,
  h2,
  h3,
  p,
  hr,
  blockquote,
  pre: props => props.children,
  code: pre,
  inlineCode: code,
}

export const Root = props =>
  <MDXProvider components={components}>
    <div className='p4 mx-auto max-width-4'
      style={{
        lineHeight: 1.625,
      }}>
      {props.children}
    </div>
  </MDXProvider>

