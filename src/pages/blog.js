import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogStyle from "./blog.module.scss"
import Head from "../components/head"

const blogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <Head title="Blog" />
      <Layout>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1>Blog Post</h1>
              <ol className={blogStyle.posts}>
                {data.allContentfulBlogPost.edges.map(edge => {
                  return (
                    <li className={blogStyle.post}>
                      <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default blogPage
