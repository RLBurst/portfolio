require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Ronald Lee',
    author: 'Ronald Lee',
    description: 'Welcome to my personal website!',
    siteUrl: 'https://ronaldlee.netlify.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/rlburst',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-remark-images',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
