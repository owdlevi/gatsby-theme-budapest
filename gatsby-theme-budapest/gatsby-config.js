module.exports = {
  siteMetadata: {
    title: `Blog Title Placeholder`,
    author: `Name Placeholder`,
    description: `Description placeholder`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`
      }
    ]
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'uploads'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`posts`, `categories`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`
  ]
}
