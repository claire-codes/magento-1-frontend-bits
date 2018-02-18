import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
      console.log(this.props);
      let githubUrl = `https://github.com/claireparker/magento-gatsby-blog/blob/master/src/pages${this.props.postUrl}index.md`
    return (
      <div>
        <p>
          Comments? Typos? <a href={githubUrl}>Edit this page on Github</a>
        </p>
      </div>
    )
  }
}

export default Bio
