import { graphql } from 'gatsby'
import BlogPage from '../components/blog'

export default BlogPage

export const query = graphql`
  query BlogsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 1000
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        excerpt
        fields {
          slug
        }
      }
    }
  }
`
