import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Head from "../components/head"

const indexPage = ({ data }) => {
  return (
    <>
      <Head title="Home" />
      <section className="hero is-fullheight">
        <Header />
        <div className="hero-body has-background-warning">
          <div className="container has-text-centered">
            <figure className="image">
              <Img
                className="big-logo"
                fixed={data.file.childImageSharp.fixed}
              />
            </figure>
            <article className="content">
              <h1 className="title is-marginless">I'm Sayid Haidar, a Full-stack Developer</h1>
              <br />
              <p>
                I am a software engineer from Surabaya, Indonesia. Love working
                on web technologies like Laravel, Node.js, React, and Vue.
                Currently working on my bachelor thesis and Nine Twenty One.
              </p>
            </article>
          </div>
        </div>
      </section>
      <style jsx>{`
        .big-logo {
          cursor: pointer;
          filter: drop-shadow(0 6px 3px rgba(0, 0, 0, 0.3));
          margin: auto;
          padding: auto;
          margin-bottom: 1rem;
          max-width: 300px;
          transform: scale(1.02);
          transition: all 0.3s ease;
        }
        .big-logo:hover {
          transform: scale(1.08) rotate(1deg);
          filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.2));
        }
        .big-logo:active {
          transform: scale(1.04) rotate(0.5deg);
        }
      `}</style>
    </>
  )
}

export default indexPage

export const query = graphql`
  {
    file(relativePath: { eq: "Profil-logo.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
