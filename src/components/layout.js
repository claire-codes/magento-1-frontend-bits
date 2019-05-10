import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import codeStyle from '../utils/code.scss'

import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

require('prismjs/themes/prism-okaidia.css')

// class Template extends React.Component {
//   render() {
//     const { location, children } = this.props
//     let header

//     let rootPath = `/`
//     if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
//       rootPath = __PATH_PREFIX__ + `/`
//     }

//     if (location.pathname === rootPath) {
//       header = (
        // <h1
        //   style={{
        //     ...scale(1.5),
        //     marginBottom: rhythm(1.5),
        //     marginTop: 0,
        //   }}
        // >
        //   <Link
        //     style={{
        //       boxShadow: 'none',
        //       textDecoration: 'none',
        //       color: 'inherit',
        //       letterSpacing: '4px',
        //       color: '#F26322',
        //       textShadow: '5px 5px #333',
        //     }}
        //     to={'/'}
        //   >
        //     Magento 1 Frontend Bits
        //   </Link>
        // </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: 'Montserrat, sans-serif',
//             marginTop: 0,
//             marginBottom: rhythm(-1),
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: 'none',
//               textDecoration: 'none',
//               color: 'inherit',
//             }}
//             to={'/'}
//           >
//             Magento 1 Frontend Bits
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <Container
//         style={{
//           maxWidth: rhythm(24),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//         }}
//       >
//         {header}
//         {children}
//       </Container>
//     )
//   }
// }

// export default Template

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
