
import React from 'react'

const GithubBadge = ({ user, repo, ...props }) => (
  <iframe
    src={`//ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true&size=large`}
    frameBorder='0'
    scrolling='0'
    width='150px'
    height='30px' />
)

GithubBadge.defaultProps = {
  user: 'basscss',
  repo: 'basscss',
}

export default GithubBadge

