import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogStyle from "./blog.module.scss"

const blogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {fields:publishedDate, order:DESC}) {
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

  console.log(data)

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  )
}

export default blogPage
