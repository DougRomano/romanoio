import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const Template = ({data, location}) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date} = frontmatter

  return (
    <Layout>
        <div>
        <Helmet title={`${title} - My Blog`} />
        <div>
            <h1>{title}</h1>
            <h3>{date}</h3>

            <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
 query BlogPostByPath($path: String!) {
   markdownRemark(frontmatter: { path: { eq: $path } }) {
     html 
     frontmatter {
       title
       date(formatString: "MMMM, DD, YYYY")
       path
       tags
       excerpt
     }
   }
 }
`


export default Template