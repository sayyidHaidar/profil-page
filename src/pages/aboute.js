import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const aboutePage = () => {
  return (
    <>
      <Layout>
        <h1>Aboute Page</h1>
        <p>I'm a intovert boy</p>
        <p>
          wana see me? <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </>
  )
}

export default aboutePage
