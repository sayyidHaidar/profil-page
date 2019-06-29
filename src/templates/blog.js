import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "MMMM D, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <>
      <Layout>
        <section className="section is-paddingless-horizontal is-paddingless-vertikal">
          <div className="container grid">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="is-active">
                  <Link to={`/blog/${props.data.contentfulBlogPost.slug}`}>
                    {props.data.contentfulBlogPost.title}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="section is-paddingless-horizontal is-paddingless-top">
          <div className="container grid">

          <article className="media center">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Sayid Abdul Aziz</strong>{" "}
                    <a>@sayid.haidar</a>
                    <br />
                    <span className="has-text-grey">
                      Self-taught, inspired to learn
                      <br />
                      <time datetime="2018-04-20">Apr 20</time> · 20 min read
                    </span>
                  </p>
                </div>
              </div>
            </article>

            <article className="content non-padding-top">  
            <h1 className="title is-2">{props.data.contentfulBlogPost.title}</h1>
            <p className="subtitle is-4">{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(
              props.data.contentfulBlogPost.body.json,
              options
            )}
            </article>

          </div>
        </section>
      </Layout>
      <style jsx>{`
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .is-paddingless-horizontal {
          padding-left: 0;
          padding-right: 0;
        }
        .is-paddingless-top {
          padding-top: 0;
        }
        .is-paddingless-vertikal {
          padding-top: 0;
          padding-bottom: 0;
        }
        .grid {
          display: grid;
          grid-template-columns:
            [xl-start] 1fr 1.5rem [md-start] minmax(0, 750px)
            [md-end] 1fr 1.5rem [xl-end];
        }

        .grid * {
          grid-column: md;
        }
        .grid-xl {
          grid-column: xl;
        }
      `}</style>
    </>
  )
}

export default Blog
