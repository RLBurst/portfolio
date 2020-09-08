/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import React from 'react'
import { Global } from '@emotion/core'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={(theme) => ({
          html: {
            height: '100%',
          },
          '#___gatsby': {
            height: '100%',
            '& > #gatsby-focus-wrapper': {
              height: '100%',
            },
          },
        })}
      />
      <Flex sx={{ flexDirection: 'column', height: '100%' }}>
        <Header />
        <Container sx={{ variant: 'layout.container.body' }}>
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
