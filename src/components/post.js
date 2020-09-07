/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from './layout'

const Post = ({ data }) => {
  const post = data.mdx

  return (
    <Layout>
      <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <div sx={{ mt: '2rem', width: '80%' }}>
          <article>
            <section>
              <MDXRenderer>{post.body}</MDXRenderer>
            </section>
          </article>
        </div>
      </Flex>
    </Layout>
  )
}

export default Post
