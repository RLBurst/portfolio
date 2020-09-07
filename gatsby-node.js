const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'Mdx') {
    const { createNodeField } = actions
    const slug = createFilePath({
      node,
      getNode,
      basePath: '',
      trailingSlash: false,
    })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: require.resolve('./src/templates/home-query'),
  })

  createPage({
    path: 'blog',
    component: require.resolve('./src/templates/blog-query'),
  })

  const result = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const posts = result.data.allMdx.nodes
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].id
    const next = index === 0 ? null : posts[index - 1].id

    createPage({
      path: post.fields.slug,
      component: require.resolve('./src/templates/post-query'),
      context: {
        id: post.id,
        previousId: previous,
        nextId: next,
      },
    })
  })
}
