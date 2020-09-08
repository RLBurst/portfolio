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
      <div
        sx={{
          mt: '3rem',
          mr: '2rem',
          float: 'left',
          width: `${avatar.width}`,
        }}
      >
        <Img fixed={avatar.childImageSharp.fixed} />
      </div>
      <div sx={{ mt: '2rem' }}>
        <article>
          <section>
            <p>Hi! I'm Ron, a software developer.</p>
            <p>
              This is a minimal styled Gatsby site that I created in my spare
              time. I have always liked simple designs and I do not consider
              myself a full stack developer so creating something simple was
              also a nice introduction.
            </p>
            <p>
              I wanted a portfolio like website as an alternative to providing a
              bunch of links to GitHub repositories or GitHub pages and a place
              where I could just write my thoughts away. I am a huge fan of
              writing!
            </p>
            <p>
              Some of the features of this site so far include a blog and
              projects showcase, light and dark mode support, and continuous
              deployment with Netlify.
            </p>
            <p>
              There are still a lot of features and tweaks *cough* bugs *cough*
              that can be done to make the site better such as integration with
              pictures, SEO, tags, pagination, responsive design, etc. The good
              news is that there's plugins for everything! So it may be
              easy...but for now I am more focused on content such as writing
              and coding projects.
            </p>
            <p>
              That's just a placeholder picture for now. Found it on Reddit so
              all credits to u/Myunin. Really liked it because it was a Sylveon
              and Umbreon color pallete which fits in to the whole light and
              dark mode (shush I know technically it should be Espeon!).
            </p>
          </section>
        </article>
      </div>
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
