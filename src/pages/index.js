import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
    <div>
      {posts.map(({node: post}) => {
        const { frontmatter } = post

        return (
          <div key={post.id}>
            <h2>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
    </Layout>
  )
}

export const query = graphql`
 query IndexQuery {
   allMarkdownRemark  {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           date(formatString: "MMMM Do, YYYY")
           path
           tags
           excerpt
         }
       }
     }
   }
 }
`

export default IndexPage