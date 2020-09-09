/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const About = ({ data }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  const avatar = isDark ? data.umbreon : data.sylveon

  return (
    <Layout>
      <Helmet>
        <title>{`About | ${data.site.siteMetadata.title}`}</title>
      </Helmet>
      <Img
        fixed={avatar.childImageSharp.fixed}
        sx={{
          mt: '2rem',
          mr: '1rem',
          float: 'left',
          width: `${avatar.width}`,
        }}
      />
      <article>
        <section>
          <p>
            Hi! I'm Ron, <strike>a software developer.</strike>
          </p>
          <p>
            This is a minimal styled Gatsby site that I created in my spare
            time. I have always liked simple designs and I do not consider
            myself a full stack developer so creating something simple was also
            a nice introduction.
          </p>
          <p>
            I wanted a portfolio like website as an alternative to providing a
            bunch of links to GitHub repositories or GitHub pages and a place
            where I could just write my thoughts away. I am a huge fan of
            writing!
          </p>
          <p>
            Some of the features of this site so far include a blog and projects
            showcase, light and dark mode support, and continuous deployment
            with Netlify.
          </p>
          <p>
            There are still a lot of features and tweaks *cough* bugs *cough*
            that can be done to make the site better. The good news is that
            there's plugins for almost everything! So it may be easy...but for
            now I am more focused on content such as writing and other coding
            projects. However, I will create a todo list for this site in the
            future.
          </p>
          <p>
            That's just a placeholder picture for now. Found it on Reddit so all
            credits to u/Myunin. Really liked it because it was a Sylveon and
            Umbreon color pallete which fits in to the whole light and dark mode
            (shush I know technically it should be Espeon!).
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default About

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    umbreon: file(relativePath: { eq: "assets/umbreon.png" }) {
      childImageSharp {
        fixed(height: 250) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    sylveon: file(relativePath: { eq: "assets/sylveon.png" }) {
      childImageSharp {
        fixed(height: 250) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
