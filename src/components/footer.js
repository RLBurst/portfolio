/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'

const Footer = () => {
  return (
    <Container sx={{ variant: 'layout.container.footerMenu' }}>
      <Flex
        as="footer"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Flex
          as="span"
          sx={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          Portfolio 2020. Built with Gatsby.
        </Flex>
        <Flex>
          <a
            sx={{ variant: 'links.navRight', ml: 0 }}
            href="https://github.com/RLBurst"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon sx={{ verticalAlign: 'bottom' }} />
          </a>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Footer
