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
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-material-ui',
  ],
}
