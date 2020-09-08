import { graphql } from 'gatsby'
import HomePage from '../components/home'

export default HomePage

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    github {
      viewer {
        repositories(first: 9) {
          edges {
            node {
              id
              name
              url
              description
            }
          }
        }
      }
    }
  }
`
