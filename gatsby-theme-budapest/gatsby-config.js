module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Budapest - Beta`,
    author: `David Levente Dozsa - CrazyCode.com`,
    description: `Modern minimalist Gatsby Theme. Version 0.0.1 Beta`,
    siteName: `Gatsby Theme Budapest`,
    siteDescription: `Modern minimalist Gatsby Theme.`
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `./content/posts`,
        name: 'uploads'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              quality: 80,
              withWebp: true,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-remark-prismjs`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`
  ]
}
