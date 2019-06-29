import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"

const Layout = props => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  )
}

export default Layout
