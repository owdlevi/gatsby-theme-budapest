/** @jsx jsx */
import { useState } from "react"
import { Styled, jsx } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogPost = ({ data: { mdx }, ...props }) => {

  const next = props.pageContext.next
  const prev = props.pageContext.prev

  console.log(props)
  const [isActive, setIsActive] = useState(false)
  const slideIn = useSpring({
    transform: isActive ? `translateY(0)` : `translateY(200px)`
  })
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
        <animated.div style={slideIn}

          sx={{
            width: ['90%', '80%'],
            mx: 'auto',
            mt: ['40px', '-100px', '-200px'],
            mb: [3, 4],
            zIndex: 20,
            position: 'relative',
            backgroundColor: 'background',
            p: [3, 4],
            variant: 'styles.shadow',
          }}>
          <Waypoint key={mdx.id} bottomOffset="50px" onEnter={() => setIsActive(true)} />
          <div>
            <Styled.h1
              sx={{
                textAlign: 'center'
              }}>
              {mdx.frontmatter.title}
            </Styled.h1>
            <Styled.p>{mdx.frontmatter.post_date}</Styled.p>
          </div>

          <MDXRenderer>{mdx.body}</MDXRenderer>
          <div sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            mx: 'auto',
            my: [2, 3, 4],
            backgroundColor: 'background',
            py: [3, 4],
            variant: 'styles.shadow',
          }}>
            {
              prev ? <div>
                <Link to={prev.fields.slug}>{
                  prev.frontmatter.title}</Link></div> : <div></div>
            }
            {
              next ? <div><Link to={next.fields.slug}>{next.frontmatter.title}</Link></div> : <div></div>
            }
          </div>
        </animated.div>
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

export default BlogPost
