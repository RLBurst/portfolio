/** @jsx jsx */
import { jsx, Flex, Image, useColorMode } from 'theme-ui'
import React from 'react'
import Layout from '../components/layout'
import sylveon from '../../content/assets/sylveon.png'
import umbreon from '../../content/assets/umbreon.png'

const About = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Layout>
      <Flex sx={{ justifyContent: 'center' }}>
        <div sx={{ mt: '3rem', mr: '2rem' }}>
          <Image src={isDark ? umbreon : sylveon} variant="avatar" />
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
                I wanted a portfolio like website as an alternative to providing
                a bunch of links to GitHub repositories or GitHub pages and a
                place where I could just write my thoughts away. I am a huge fan
                of writing!
              </p>
              <p>
                Some of the features of this site so far include a blog and
                projects showcase, light and dark mode support, and continuous
                deployment with Netlify.
              </p>
              <p>
                There are still a lot of features and tweaks that can be done to
                make the site better such as integration with pictures, SEO,
                tags, pagination, etc. (there's plugins for everything!) but for
                now I am more focused on content such as writing and coding
                projects.
              </p>
              <p>
                That's just a placeholder picture for now. Found it on Reddit so
                all credits to u/Myunin. Really liked it because it was a
                Sylveon and Umbreon color pallete which fits in to the whole
                light and dark mode (shush I know technically it should be
                Espeon!).
              </p>
            </section>
          </article>
        </div>
      </Flex>
    </Layout>
  )
}

export default About
