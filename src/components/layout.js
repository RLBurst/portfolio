/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui'
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
            margin: 0,
            padding: 0,
            minHeight: '100%',
          },
          '#___gatsby': {
            minHeight: '100%',
            '& > #gatsby-focus-wrapper': {
              minHeight: '100%',
            },
          },
        })}
      />
      <Grid sx={{ gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
        <Header />
        <Container sx={{ variant: 'layout.container.body' }}>
          {children}
        </Container>
        <Footer />
      </Grid>
    </>
  )
}

export default Layout
