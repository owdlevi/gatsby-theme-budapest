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
        width: ['100%', 'calc(100%/3 - 40px)'],
        boxShadow: '3px 3px 20px rgba(0, 0, 0, .5)',
        textAlign: 'center',

        height: ['auto', '600px'],
        borderRadius: 5,
        position: 'relative',
        overflow: 'hidden'
      }}>
      <div sx={{
        height: '60%',
        position: 'relative'
      }}>
        <Img
          sx={{
            height: '100%'
          }}
          fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
          alt={post.node.frontmatter.title}
        />
        <div sx={{
          position: 'absolute',
          zIndex: 20,
          left: 0,
          bottom: 0,
          backgroundColor: 'primary',
        }}>
          <Link to='/a' 
          sx={{
            display: 'inline-block',
            p: [2],
            color: 'white',
            fontWeight: '500',
            textTransform: 'uppercase',
            fontSize: [0, 1],
            letterSpacing: '1px'
          }}>
          Category</Link>
        </div>
      </div>
      <div sx={{
        p: [2, 3], 
      }}>
        <Styled.h2
          sx={{
            m: 0,
            color: 'primary',
            textDecoration: 'none',
            mb: [1, 2]
          }}>
          {post.node.frontmatter.title}
        </Styled.h2>
        <small sx={{ fontWeight: 'bold' }}>{post.date}</small>

        <Styled.p sx={{
          color: 'primary',
          textDecoration: 'none',
          lineHeight: '1.4em'
        }}>{post.node.frontmatter.excerpt}</Styled.p>
        <div sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          // height: '40px',
          p:[1,2],
          backgroundColor: 'lightBackground',
          color: 'secondary'
        }}>
          <Link to='/travel'>#travel</Link>
          <Link to='/hungaryy'>#hungary</Link>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
