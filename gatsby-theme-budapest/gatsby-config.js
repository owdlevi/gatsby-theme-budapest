const siteConfig = require('./config/siteConfig')

module.exports = {
  siteMetadata: {
    siteUrl: siteConfig.siteURL,
    lang: siteConfig.lang,
    title: siteConfig.siteName,
    author: `David Levente Dozsa - CrazyCode.com`,
    description: `Modern minimalist Gatsby Theme. Version 0.0.1 Beta`,
    siteName: siteConfig.siteName,
    siteBrandName: siteConfig.siteBrandName,
    siteDescription: siteConfig.siteDescription,
    homePageHeroTitle: siteConfig.homePageHeroTitle,
    homePageHeroText: siteConfig.homePageHeroText,
    homePageQuote: siteConfig.homePageQuote,
    latestPostTitle: siteConfig.latestPostTitle,
    latestPostText: siteConfig.latestPostText,
    copyrightText: siteConfig.copyrightText,
    facebookURL: siteConfig.copyrightText,
    linkedinURL: siteConfig.copyrightText,
    twitterURL: siteConfig.copyrightText,
    instagramURL: siteConfig.copyrightText
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.siteTitle,
        short_name: siteConfig.siteShortName,
        lang: siteConfig.lang,
        description: siteConfig.siteDescription,
        start_url: '/',
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: 'minimal-ui',
        icon: `./src/images/favicon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-remark-prismjs`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`
  ]
}
