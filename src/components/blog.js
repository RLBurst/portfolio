/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import React from 'react'
import { Helmet } from 'react-helmet'
import BlogList from './blog-list'
import Layout from './layout'

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <Helmet>
        <title>{`Blog | ${data.site.siteMetadata.title}`}</title>
      </Helmet>
      <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <div sx={{ mt: '1rem', width: '80%' }}>
          <BlogList posts={posts} />
        </div>
      </Flex>
    </Layout>
  )
}

export default Blog
