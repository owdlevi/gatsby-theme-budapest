/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const blogPost = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.seo.title ? mdx.frontmatter.seo.title : mdx.frontmatter.title}
        description={mdx.frontmatter.seo.description ? mdx.frontmatter.seo.description : mdx.frontmatter.excerpt}
      />
      <article
        sx={{
          width: ['100%'],
          mx: 'auto'
        }}>
        <div>
          <Img
            sx={{
              height: ['400px', '400px', '100%']
            }}
            fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
            alt={mdx.frontmatter.title}
          />
        </div>
        <div
          sx={{
            width: ['90%', '80%'],
            mx: 'auto',
            mt: ['40px', '-100px', '-200px'],
            mb: [3, 4],
            zIndex: 20,
            position: 'relative',
            backgroundColor: 'background',
            p: [3, 4],
            boxShadow: '3px 3px 20px rgba(0, 0, 0, .5)'
          }}>
          <Styled.h1
            sx={{
              textAlign: 'center'
            }}>
            {mdx.frontmatter.title}
          </Styled.h1>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      timeToRead
      frontmatter {
        title
        tags
        post_date
        excerpt
        category
        seo {
          title
          description
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1900, maxHeight: 600, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default blogPost
