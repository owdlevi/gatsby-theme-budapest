/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const BlogCard = ({ post }) => {
  return (
    <Link
      to={post.node.fields.slug}
      sx={{
        mb: 4,
        width: ['100%', 'calc(100%/3 - 20px)'],
        boxShadow: '3px 3px 20px rgba(0, 0, 0, .5)',
        textAlign: 'center',

        height: ['auto', '600px'],
        borderRadius: 5,
        position: 'relative',
        overflow: 'hidden'
      }}>
      <Img
        sx={{
          height: '300px'
        }}
        fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
        alt={post.node.frontmatter.title}
      />
      <div sx={{ p: [2, 3] }}>
        <Styled.h2
          sx={{
            m: 0
          }}>
          {post.node.frontmatter.title}
        </Styled.h2>
        <small sx={{ fontWeight: 'bold' }}>{post.date}</small>

        <Styled.p>{post.node.frontmatter.excerpt}</Styled.p>
      </div>
    </Link>
  )
}

export default BlogCard
