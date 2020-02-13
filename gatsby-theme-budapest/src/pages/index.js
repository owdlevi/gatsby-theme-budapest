import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Quote from '../components/Quote'
import BlogList from '../components/BlogList'

const indexPage = props => {
  const blogPosts = props.data.allMdx.edges
  return (
    <Layout>
      <Hero>Hero Component?</Hero>
      <Quote />
      <BlogList posts={blogPosts}></BlogList>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query allPostQuery {
    allMdx(sort: { fields: frontmatter___post_date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            post_date
            excerpt
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 300, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default indexPage
