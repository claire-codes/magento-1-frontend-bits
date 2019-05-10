import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: `4.375rem`,
        }}
      >
        <img
          src={profilePic}
          alt={`Me`}
          style={{
            marginRight: `0.875rem`,
            marginBottom: 0,
            width: `3.5rem`,
            height: `3.5rem`,
            borderRadius: `3.5rem`,
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
