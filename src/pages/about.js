import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const aboutePage = () => {
  return (
    <>
      <Head title="About" />
      <Layout>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1>Aboute Page</h1>
              <p>I'm a intovert boy</p>
              <p>
                wana see me? <Link to="/contact">Contact me.</Link>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default aboutePage
