const siteConfig = require('./config/siteConfig')

module.exports = {
  siteMetadata: {
    siteUrl: siteConfig.siteURL,
    lang: siteConfig.lang,
    title: siteConfig.siteName,
    author: `David Levente Dozsa - CrazyCode.com`,
    description: `Modern minimalist Gatsby Theme. Version 0.0.1 Beta`,
    siteName: 'AdrianSEO.ro',
    siteBrandName: 'AdrianSEO.ro',
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
      resolve: 'gatsby-theme-budapest'
    }
  ]
}
