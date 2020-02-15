import React from 'react'
import Helmet from 'react-helmet'

import siteConfig from '../../../config/siteConfig'

const SEO = ({ title, description }) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteConfig.siteURL ? siteConfig.siteURL : ``,
      name: siteConfig.siteName ? siteConfig.siteName : ``,
      alternateName: siteConfig.siteTitleAlt ? siteConfig.siteTitleAlt : ``
    }
  ]

  return (
    <Helmet>
      <html lang={siteConfig.lang} />
      {/* General tags */}
      <title>
        {title} {siteConfig.siteBrandName ? ` | ${siteConfig.siteBrandName}` : ``}
      </title>
      <meta name="description" content={description} />
      {/* <meta name="image" content={image} /> */}

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
    </Helmet>
  )
}

export default SEO
