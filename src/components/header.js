/** @jsx jsx */
import { jsx, Container, Flex, useColorMode } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import HomeIcon from '@material-ui/icons/Home'
import ColorModeToggle from './colormode-toggle'

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  const toggleColorMode = (e) => {
    e.preventDefault()
    setColorMode(isDark ? 'light' : 'dark')
  }

  return (
    <Container as="header" sx={{ variant: 'layout.container.headerMenu' }}>
      <Flex as="nav" sx={{ justifyContent: 'space-between' }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Link sx={{ variant: 'links.navLeft' }} to="/">
            <HomeIcon sx={{ verticalAlign: 'bottom' }} />
          </Link>
        </Flex>
        <Flex sx={{ alignItems: 'center' }}>
          <Link sx={{ variant: 'links.navRight' }} to="/about">
            About
          </Link>
          <Link sx={{ variant: 'links.navRight' }} to="/blog">
            Blog
          </Link>
          <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Header
