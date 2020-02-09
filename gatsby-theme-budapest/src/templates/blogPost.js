/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'

const blogPost = ({ data: { mdx } }) => {
  return (
    <Layout>
      <div
        sx={{
          width: ['100%', '90%'],
          mx: 'auto',
          py: [3, 4],
          px: [3, 4]
        }}>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default blogPost
