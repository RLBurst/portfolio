/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Styled } from 'theme-ui'
import { Link } from 'gatsby'

const BlogLink = ({ post }) => {
  return (
    <article>
      <header>
        <Styled.h2>
          <Link sx={{ variant: 'links.body' }} to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </Styled.h2>
        <small>{post.frontmatter.date}</small>
      </header>
      <section>
        <p>{post.excerpt}</p>
      </section>
    </article>
  )
}

export default BlogLink
