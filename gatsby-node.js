const path = require('path')


const createTagPages = (createPages, posts) => {
    const tagPageTemplate = path.resolve(`src/templates/tag-page.js`)
    const allTagsTemplate = path.resolve(`src/templates/all-tags.js`)

    posts.forEach(({ node }) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                if (!postByTags[tag]) {
                    postsByTags[tag] = []
                }

                postByTags[tag].push(node)
            })
        }
    })

    const tags = Object.keys(postsByTags)

    createPath({
        path: `/tags`,
        component: allTagsTemplate,
        context: {
            tags: tags.sort()
        }
    })

    tags.forEach(tagName => {
        const posts = postsByTags[tagName]

        createPage({
            path: `/tags/${tagName}`,
            component: tagPageTemplate,
            context: {
                posts,
                tagName
            }

        })
    })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  // If you are experiencing issues with the ordering of the posts on the homepage,
  // replace the `allMarkdownRemark` line below with something like this:
  // allMarkdownRemark(sort:{fields:[frontmatter___date], order: ASC}) {

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            date
            path
            title
            excerpt
            tags
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges

      createTagPages(createPage, posts)


      posts.forEach(({node}, index) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate
        })
      })
    })
}
