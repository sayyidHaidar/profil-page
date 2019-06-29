import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <>
      <Head title="404" />
      <Layout>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1>Page not found</h1>
              <p>
                <Link to="/">Head Home</Link>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default NotFound
