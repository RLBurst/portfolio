/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Flex sx={{ flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Container sx={{ variant: 'layout.container.body' }}>
        {children}
      </Container>
      <Footer />
    </Flex>
  )
}

export default Layout
