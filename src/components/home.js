/** @jsx jsx */
import { jsx, Grid, Card, Flex, Styled } from 'theme-ui'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from './layout'

const Home = ({ data }) => {
  const edges = data.github.viewer.repositories.edges
  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Flex sx={{ justifyContent: 'center' }}>
        <Styled.h2>Projects</Styled.h2>
      </Flex>
      <Grid
        columns={edges.length < 3 ? edges.length : 3}
        sx={{
          justifyItems: 'center',
        }}
      >
        {edges.map(({ node: { id, url, name, description } }) => (
          <Card
            key={id}
            as="a"
            href={url}
            target="_blank"
            rel="noreferrer"
            sx={{
              textDecoration: 'none',
              fontWeight: 700,
              color: 'text',
              boxShadow: (theme) => `0 0 4px ${theme.colors.primary}`,
            }}
          >
            {name}
            <p>{description}</p>
          </Card>
        ))}
      </Grid>
    </Layout>
  )
}

export default Home
