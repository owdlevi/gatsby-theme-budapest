import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Head = props => {
  const { title, description, data } = props
  const { buildTime, config } = data.site

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl ? config.siteUrl : ``,
      name: config.siteName ? config.siteName : ``,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : ``
    }
  ]

  return (
    <Helmet>
      <html lang={config.lang} />
      {/* General tags */}
      <title>
        {title} {config.siteBrandName ? ` | ${config.siteBrandName}` : ``}
      </title>
      <meta name="description" content={description} />
      {/* <meta name="image" content={image} /> */}

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
    </Helmet>
  )
}

const SEO = props => <StaticQuery query={querySEO} render={data => <Head {...props} data={data} />} />

export default SEO

const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      config: siteMetadata {
        lang
        siteName
        siteUrl
        siteBrandName
      }
    }
  }
`
