import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const indexPage = () => {
  return (
    <>
      <Head title="Home" />
      <Layout>
        <h1>Hello</h1>
        <h2>I'm Sayid, a full-stack developer.</h2>
        <p>
          Need a develop? <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </>
  )
}

export default indexPage
