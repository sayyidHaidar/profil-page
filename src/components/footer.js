import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <p>Create by {data.site.siteMetadata.author}, made whit Gatsby JS.</p>
    </footer>
  )
}

export default Footer
