import React from 'react'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Me`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Claire</strong> on her sofa in Manchester.{' '}
          <a href="https://twitter.com/claireparkerpen">
            You should follow her on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
