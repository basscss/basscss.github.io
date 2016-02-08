
import React from 'react'

const GithubBadge = ({ user, repo, ...props }) => (
  <iframe
    src={`//ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true`}
    className='my1'
    frameBorder='0'
    scrolling='0'
    width='96px'
    height='20px' />
)

GithubBadge.defaultProps = {
  user: 'basscss',
  repo: 'basscss',
}

export default GithubBadge

