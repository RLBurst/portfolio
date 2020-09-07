import React from 'react'
import BlogLink from './blog-link'

const BlogList = ({ posts }) => {
  return (
    <>
      {posts.map((node) => (
        <BlogLink key={node.fields.slug} post={node} />
      ))}
    </>
  )
}

export default BlogList
