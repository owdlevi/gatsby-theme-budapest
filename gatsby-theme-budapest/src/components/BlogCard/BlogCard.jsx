/** @jsx jsx */
import { useState } from 'react'
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, animated, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'

import Tag from '../Tag/Tag'

const BlogCard = ({ post }) => {
  const [iscardVisisble, setCardVisible] = useState(false)

  const cardIn = useSpring({
    config: { duration: 500 },
    transform: iscardVisisble ? `scale(1) translateY(0)` : `scale(0.9) translateY(100px)`
  })

  return (
    <animated.div
      key={post.node.fields.slug}
      style={cardIn}
      sx={{
        mb: 4,
        width: ['100%', '100%', 'calc(100%/2 - 30px)', 'calc(100%/3 - 40px)'],
        boxShadow: '3px 3px 20px rgba(0, 0, 0, .5)',
        textAlign: 'center',
        height: ['auto', '600px'],
        borderRadius: 5,
        position: 'relative',
        overflow: 'hidden'
      }}>
      <Waypoint key={post.node.fields.slug} bottomOffset="50px" onEnter={() => setCardVisible(true)} />
      <Link to={post.node.fields.slug}>
        <div
          sx={{
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
          <div
            sx={{
              position: 'absolute',
              zIndex: 20,
              left: 0,
              bottom: 0,
              backgroundColor: 'primary'
            }}>
            <Link
              to="/"
              sx={{
                display: 'inline-block',
                p: [2],
                color: 'white',
                fontWeight: '500',
                textTransform: 'uppercase',
                fontSize: '12px',
                letterSpacing: '1px'
              }}>
              {post.node.frontmatter.category}
            </Link>
          </div>
          <div
            sx={{
              position: 'absolute',
              zIndex: 20,
              right: 0,
              bottom: 0,
              backgroundColor: 'primary'
            }}>
            <span
              sx={{
                display: 'inline-block',
                p: [2],
                color: 'white',
                fontWeight: '500',
                textTransform: 'uppercase',
                fontSize: '12px',
                letterSpacing: '1px'
              }}>
              {post.node.timeToRead} min
            </span>
          </div>
        </div>
        <div
          sx={{
            p: [2, 3]
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
          <Styled.p
            sx={{
              color: 'primary',
              textDecoration: 'none',
              lineHeight: '1.4em'
            }}>
            {post.node.frontmatter.excerpt}
          </Styled.p>
          <div
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              // height: '40px',
              p: [1, 2],
              backgroundColor: 'lightBackground',
              color: 'secondary'
            }}>
            {post.node.frontmatter.tags.map(tag => {
              return <Tag tag={tag} />
            })}
          </div>
        </div>
      </Link>
    </animated.div>
  )
}

export default BlogCard
