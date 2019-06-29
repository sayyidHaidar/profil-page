import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const contactPage = () => {
  return (
    <>
      <Head title="Contact" />
      <Layout>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1>Event Page</h1>
              <p>
                check my code in{" "}
                <a href="https://github.com/savyd" target="_blank">
                  Github
                </a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default contactPage
