import { graphql } from 'gatsby'
import HomePage from '../components/home'

export default HomePage

export const query = graphql`
  {
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
